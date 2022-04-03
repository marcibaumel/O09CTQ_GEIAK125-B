import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DonationData } from 'src/app/models/Donation.Data';
import { DonationPlaceData } from 'src/app/models/DonationPlace.Data';
import { DonationService } from 'src/app/services/donation.service';
import { DonationPlaceService } from 'src/app/services/donationPlace.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit, OnDestroy {

  donationElements: any = [];
  private donationSub: Subscription;
  donationPlaceElements: DonationPlaceData[] = [];
  private donationPlaceSub: Subscription;

  successfulSearch: boolean;
  searchedElements: any[] = [];

  searchInputInDate:Date
  searchInputOutDate:Date
  searchInputName:string
  searchInputPlace:string

  constructor(private donationService: DonationService, private donationPlaceService: DonationPlaceService) { }

  ngOnDestroy(): void {
    this.donationPlaceSub.unsubscribe();
    this.donationSub.unsubscribe();
  }

  ngOnInit(): void {
    this.donationService.getAllDonationPlace();
    this.donationSub = this.donationService
      .getDonationElementsUpdateListener()
      .subscribe((elements: DonationData[]) => {
        console.log(elements);
        this.donationElements = elements;
      });

    this.donationPlaceService.getAllDonationPlace();
    this.donationPlaceSub = this.donationPlaceService
        .getDonationPlaceElementsUpdateListener()
        .subscribe((elements: DonationPlaceData[]) => {
          console.log(elements);
          this.donationPlaceElements = elements;
        });
  }

  onSearch(){
    console.log(this.searchInputInDate, this.searchInputOutDate, this.searchInputName, this.searchInputPlace)
    this.searchedElements = [];

    if(this.searchInputInDate > this.searchInputOutDate){
      alert("In date cant be bigger than out date")
      this.searchInputInDate = null;
      return
    }
    if(this.searchInputOutDate< this.searchInputInDate){
      alert("Out date cant be smaller than in date")
      this.searchInputOutDate = null;
      return
    }
    if(this.searchInputInDate == undefined && this.searchInputOutDate != undefined || this.searchInputInDate != undefined && this.searchInputOutDate==undefined){
      alert("Define both date")
      this.searchInputOutDate = null;
      this.searchInputInDate = null;
      return
    }


    //JUST SEARCH NAME
    if(this.searchInputName != undefined && this.searchInputInDate == undefined && this.searchInputOutDate== undefined && this.searchInputPlace== undefined){
      for (let i = 0; i < this.donationElements.length; i++) {
        if (this.donationElements[i].donor_id_fk.name.includes(this.searchInputName)) {
          this.searchedElements.push(this.donationElements[i]);
        }
      }
      console.log(this.searchedElements)
    }

    //JUST DATE



    //JUST PLACE


    //JUST NAME AND DATE

    //JUST NAME AND PLACE

    //JUST DATE AND PLACE

    //JUST NAME AND DATE AND PLACE


  }


}
