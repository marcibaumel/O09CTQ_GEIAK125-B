import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DonorData } from '../models/Donor.Data';

@Injectable({ providedIn: 'root' })
export class DonorService {
  constructor(private http: HttpClient, private router: Router) {}

  addNewDonor(){}

  /*
  addNewDonationPlace(
    name: string,
    postcode: number,
    town: string,
    address: string,
    active: boolean
  ) {
    const newElement: DonationPlaceData = {
      place_id: null,
      name: name,
      postcode: postcode,
      town: town,
      address: address,
      active: active,
    };
    this.http
      .post<{ message: string; place_id: number }>(
        'http://localhost:3000/api/donationplace',
        newElement
      )
      .subscribe((responseData) => {
        const id = responseData.place_id;
        //console.log(responseData.message);
        this.router.navigate(['/donationplaces']);
      });
  }
  */
}
