import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DonorData } from '../models/Donor.Data';

@Injectable({ providedIn: 'root' })
export class DonorService {
  constructor(private http: HttpClient, private router: Router) {}

  addNewDonor(
    name: string,
    sex: string,
    nationality: string,
    birth_place: string,
    birth_time: Date,
    postcode: string,
    town: string,
    address: string,
    taj_code: string
  ) {
    const newElement: DonorData = {
      donor_id: null,
      name: name,
      sex: sex,
      nationality: nationality,
      birth_place: birth_place,
      birth_time: birth_time,
      postcode: postcode,
      town: town,
      address: address,
      taj_code: taj_code
    }
    this.http
      .post<{ message: string; donor_id: number }>(
        'http://localhost:3000/api/donor',
        newElement
      )
      .subscribe((responseData) => {
        const id = responseData.donor_id;
        //console.log(responseData.message);
        this.router.navigate(['']);
      });
  }

 isDonorExistingByTajCode(taj: string):boolean{
  console.log(taj);
  let resultData:boolean;

  this.http.get<{message: string; result: boolean}>('http://localhost:3000/api/donor/' + taj).subscribe((responsData)=>{
    resultData = responsData.result;
  });

  return resultData;
 }
}
