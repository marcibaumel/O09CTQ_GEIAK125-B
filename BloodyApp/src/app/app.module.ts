import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { NewDonorComponent } from './new-donor/new-donor.component';
import { NewDonationComponent } from './new-donation/new-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceListComponent,
    NewPlaceComponent,
    NewDonorComponent,
    NewDonationComponent,
    DonationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
