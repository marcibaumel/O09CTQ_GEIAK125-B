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

  constructor(private donationPlaceService: DonationPlaceService,
    private doctorService:DoctorService) {}

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
        validators: [Validators.required],
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
        validators: [],
      }),
      directed_donation: new FormControl(null, {
        validators: [Validators.required],
      }),
      directed_name: new FormControl(null, {
        validators: [],
      }),
      directed_taj_code: new FormControl(null, {
        validators: [],
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
    return currentDate.toISOString().substring(0,10);
  }

  onSaveNewDonation() {
    //if succes
    console.log(this.form.get('success_donation').value);
  }
}
