import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

Injectable({providedIn: 'root'})
export class DonationService{
  constructor(private http: HttpClient, private router: Router) { }

  //TODO:Array, sub

  //TODO:add new, fix where is null but is accaptable
  addNewDonation(){}

  //TODO:get all from server
  getAllDonation(){}

  //TODO:Fillters or map, not sure what is the best
  getAllDonationWithParams(){}
}
