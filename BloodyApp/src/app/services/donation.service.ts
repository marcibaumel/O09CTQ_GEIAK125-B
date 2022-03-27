import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DonationPlaceData } from '../models/DonationPlaceData';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';

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

  private donationPlaceElements: DonationPlaceData[] = [];
  private donationPlaceElementsUpdated = new Subject<DonationPlaceData[]>();

  getAllDonationPlace(){
    this.http
      .get<{ message: string; donationPlaceElement: any}>('http://localhost:3000/api/donationplace')
      .pipe(
        map((donationPlaceData) => {
          return donationPlaceData.donationPlaceElement.map((element) => {
            //console.log(element.title);
            return {
              title: element.title,
              about: element.about,
              platform: element.platform,
              added: element.added,
              id: element._id,
            };
          });
        })
      )
      .subscribe((transformedElements) => {
        this.donationPlaceElements = transformedElements;
        this.donationPlaceElementsUpdated.next([...this.donationPlaceElements]);
      });
  }
}
