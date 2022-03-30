import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from 'ng-mat-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { CreateDonationComponent } from './components/create-donation/create-donation.component';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { CreateDonorComponent } from './components/create-donor/create-donor.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonationListComponent,
    PlaceListComponent,
    CreateDonationComponent,
    CreatePlaceComponent,
    CreateDonorComponent,
    LoginComponent,
    SignupComponent,
    WelcomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
