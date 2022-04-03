import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { DonationData } from "../models/Donation.Data";


@Injectable({providedIn: 'root'})
export class DonationService{
  constructor(private http: HttpClient, private router: Router) { }

  //TODO:Array, sub

  addNewDonation(
    donation_date: Date,
    success_donation: boolean,
    about: string,
    directed_donation: boolean,
    directed_name: string,
    directed_taj_code: string,
    donor_id_fk: number,
    doctor_id_fk: number,
    donationPlace_id_fk: number
  ) {
    const newElement: DonationData = {
      donation_id: null,
      donation_date: donation_date,
      success_donation: success_donation,
      about: about,
      directed_donation: directed_donation,
      directed_name: directed_name,
      directed_taj_code: directed_taj_code,
      donor_id_fk: donor_id_fk,
      doctor_id_fk: doctor_id_fk,
      donationPlace_id_fk: donationPlace_id_fk
    };
    console.log("DONATION DATA:"+ newElement.success_donation);


    this.http
      .post<{ message: string; donation_id: number }>(
        'http://localhost:3000/api/donation',
        newElement
      )
      .subscribe((responseData) => {
        const id = responseData.donation_id;
        console.log(responseData.message);
        console.log(responseData.donation_id);
        //this.router.navigate(['/donationplaces']);
      });

  }


  //TODO:get all from server
  getAllDonation(){}

  //TODO:Fillters or map, not sure what is the best
  getAllDonationWithParams(){}


}
