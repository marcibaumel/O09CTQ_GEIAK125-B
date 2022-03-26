import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DonationPlaceData } from '../models/DonationPlaceData';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DonationService {
  constructor(private http: HttpClient, private router: Router) {}

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
        this.router.navigate(['/']);
      });
  }
}
