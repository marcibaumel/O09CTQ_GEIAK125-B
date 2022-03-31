import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css']
})
export class CreateDonationComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      directed_taj_code: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(9),
        ],
      }),
      success_donation: new FormControl(null, {
        validators: [Validators.required],
      }),
      donation_date: new FormControl(null, {
        validators: [Validators.required],
      }),
      directed_donation: new FormControl(null, {
        validators: [Validators.required],
      }),
      directed_name: new FormControl(null, {
        validators: [Validators.required],
      }),
      about: new FormControl(null, {
        validators: [Validators.required],
      }),
      donor_id_fk: new FormControl(null, {
        validators: [Validators.required],
      }),
      doctor_id_fk: new FormControl(null, {
        validators: [Validators.required],
      }),
      donationPlace_id_fk: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

}
