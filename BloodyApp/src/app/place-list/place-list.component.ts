import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DonationPlaceData } from '../models/DonationPlaceData';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  donationPlaceElements: DonationPlaceData[]= [];
  private donationPlaceSub: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

}
