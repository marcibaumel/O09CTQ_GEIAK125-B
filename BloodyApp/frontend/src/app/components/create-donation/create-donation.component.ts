import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DoctorData } from 'src/app/models/Doctor.Data';
import { DonationPlaceData } from 'src/app/models/DonationPlace.Data';
import { DoctorService } from 'src/app/services/doctor.service';
import { DonationPlaceService } from 'src/app/services/donationPlace.service';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.css'],
})
export class CreateDonationComponent implements OnInit, OnDestroy {
  form: FormGroup;

  donationPlaceElements: DonationPlaceData[] = [];
  private donationPlaceSub: Subscription;

  doctorElements: DoctorData[] = [];
  private doctorSub: Subscription;

  constructor(
    private donationPlaceService: DonationPlaceService,
    private doctorService: DoctorService
  ) {}

  ngOnDestroy(): void {
    this.donationPlaceSub.unsubscribe();
    this.doctorSub.unsubscribe();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      donationPlace_id_fk: new FormControl(null, {
        validators: [Validators.required],
      }),
      donor_taj_code: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(9)],
      }),
      donation_date: new FormControl(this.currentDate(), {
        validators: [Validators.required],
      }),
      doctor_id_fk: new FormControl(null, {
        validators: [Validators.required],
      }),
      success_donation: new FormControl(null, {
        validators: [Validators.required],
      }),
      about: new FormControl(null, {
        validators: [Validators.minLength(5)],
      }),
      directed_donation: new FormControl(null, {
        validators: [Validators.required],
      }),
      directed_name: new FormControl(null, {
        validators: [Validators.minLength(4)],
      }),
      directed_taj_code: new FormControl(null, {
        validators: [Validators.minLength(9)],
      }),
    });

    this.donationPlaceService.getAllDonationPlace();
    this.donationPlaceSub = this.donationPlaceService
      .getDonationPlaceElementsUpdateListener()
      .subscribe((elements: DonationPlaceData[]) => {
        console.log(elements);
        this.donationPlaceElements = elements;
      });

    this.doctorService.getAllDoctor();
    this.doctorSub = this.doctorService
      .getDoctorElementsUpdateListener()
      .subscribe((elements: DoctorData[]) => {
        console.log(elements);
        this.doctorElements = elements;
      });
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  onSaveNewDonation() {
    //TODO: Refactor to methods to be more transparent


    if (!this.tajCodeValidationForDonor(this.form.get('donor_taj_code').value)) {
      alert('Taj number is not correct, or is not in the donor list');
      this.form.get('donor_taj_code').reset();
      return;
    }

    if (this.form.get('donationPlace_id_fk').invalid) {
      this.form.get('donationPlace_id_fk').reset();
      return
    }

    if (this.form.get('doctor_id_fk').invalid) {
      this.form.get('doctor_id_fk').reset();
      return
    }

    if (this.form.get('success_donation').invalid) {
      this.form.get('success_donation').reset();
      return
    }

    if (this.form.get('directed_donation').invalid) {
      this.form.get('directed_donation').reset();
      return
    }


    console.log(this.form.get('success_donation').value);


    if(this.form.get('success_donation').value == false ){
      console.log(this.form.get('about').value == null);
      if(this.form.get('about').invalid || this.form.get('about').value == null){
        console.log(this.form.get('success_donation').value);
        alert('Please write down the causes of the unsuccessful donation');
        this.form.get('about').reset();
        return;
      }
    }


    if(this.form.get('directed_donation').value){
      if (this.form.get('directed_name').invalid || this.form.get('directed_name').value == null) {
        alert('Please write down the directed name');
        this.form.get('directed_name').reset();
        return;
      }
      if (!this.tajCodeValidationForDirected(this.form.get('directed_taj_code').value)) {
        alert('Directed taj number is not correct, or is not in the donor list');
        this.form.get('directed_taj_code').reset();
        return;
      }
    }



    console.log(this.form.value);

  }

  tajCodeValidationForDirected(tajCode: string): boolean {
    let isnum: boolean = /^\d+$/.test(tajCode);
    if (tajCode == null || tajCode.length != 9 || !isnum) {
      return false;
    }

    var numbers = tajCode.split('').map(function (item) {
      return parseInt(item, 10);
    });

    let cdv =
      (7 * (numbers[0] + numbers[2] + numbers[4] + numbers[6]) +
        3 * (numbers[1] + numbers[3] + numbers[5] + numbers[7])) %
      10;
    console.log(cdv);
    if (cdv != numbers[8]) {
      return false;
    }

    console.log(numbers);
    return true;
  }

  tajCodeValidationForDonor(tajCode: string): boolean {
    let isnum: boolean = /^\d+$/.test(tajCode);
    if (tajCode == null || tajCode.length != 9 || !isnum) {
      return false;
    }

    var numbers = tajCode.split('').map(function (item) {
      return parseInt(item, 10);
    });

    let cdv =
      (7 * (numbers[0] + numbers[2] + numbers[4] + numbers[6]) +
        3 * (numbers[1] + numbers[3] + numbers[5] + numbers[7])) %
      10;
    //console.log(cdv);
    if (cdv != numbers[8]) {
      return false;
    }

    //if already in db

    //console.log(numbers);
    return true;
  }
}
