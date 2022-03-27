import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DonationPlaceData } from '../models/DonationPlaceData';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  donationPlaceElements: DonationPlaceData[] = [];
  private donationPlaceSub: Subscription;

  constructor(private donationService: DonationService) {}

  ngOnDestroy(): void {
    this.donationPlaceSub.unsubscribe();
  }

  ngOnInit(): void {
    this.donationService.getAllDonationPlace();
    this.donationPlaceSub = this.donationService
      .getDonationPlaceElementsUpdateListener()
      .subscribe((elements: DonationPlaceData[]) => {
        console.log(elements);
        this.donationPlaceElements = elements;
      });
  }

  onDelete(id: string) {
    this.donationService.donationPlaceDeleteById(id).subscribe(() => {
      this.donationService.getAllDonationPlace();
    });
  }

  onActiveStatusChange(element: DonationPlaceData) {
    console.log(element.active)
    element.active = !element.active;
    console.log(element.active)
    this.donationService.donationPlaceChangeActive(element).subscribe(() => {
      //this.donationService.getAllDonationPlace();
    });
  }
}
