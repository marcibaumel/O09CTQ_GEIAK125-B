import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-donor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.css']
})
export class CreateDonorComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(5),
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
        validators: [Validators.required],
      }),
    });
  }

  onSaveNewDonor(){
    console.log(this.form)

    if(this.ageValidation(this.form.get("birth_time").value)<18){
      alert("Age is not over 18, donation is not allowed");
      this.form.get("birth_time").reset();
      return
    }
  }

  ageValidation(dateString: string):number {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  tajCodeValidation(){

  }
}
