import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css'],
})
export class NewPlaceComponent implements OnInit {
  form: FormGroup;
  checkedActive: boolean = false;

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      }),
      postcode: new FormControl(null, {
        validators: [Validators.required],
      }),
      town: new FormControl(null, {
        validators: [Validators.required],
      }),
      address: new FormControl(null, {
        validators: [Validators.required],
      }),
      active: new FormControl(null, {
        validators: [],
      }),
    });
  }

  onSaveNewPlace() {
    if (this.form.invalid) {
      console.log('Something wrong with the form!');
      alert('The form is not valid please check your data again');
      this.form.reset();
      return;
    }

    console.log(this.form);
    console.log(this.checkedActive);

    if(this.form.value.active == null){
      this.form.value.active = false;
    }

    this.donationService.addNewDonationPlace(
      this.form.value.name,
      this.form.value.postcode,
      this.form.value.town,
      this.form.value.address,
      this.form.value.active
    );
  }
}
