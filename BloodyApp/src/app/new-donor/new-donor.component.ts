import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-donor',
  templateUrl: './new-donor.component.html',
  styleUrls: ['./new-donor.component.css']
})
export class NewDonorComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ],
      }),
      sex: new FormControl(null, {
        validators: [Validators.required],
      }),
      nationality: new FormControl(null, {
        validators: [Validators.required],
      }),
      birth_place: new FormControl(null, {
        validators: [Validators.required],
      }),
      birth_time: new FormControl(null, {
        validators: [Validators.required],
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
      taj_code: new FormControl(null, {
        validators: [],
      }),
    });
  }

}
