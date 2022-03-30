import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDonationComponent } from './components/create-donation/create-donation.component';
import { CreateDonorComponent } from './components/create-donor/create-donor.component';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'', component: WelcomePageComponent},
  {path:'donationplaces', component: PlaceListComponent},
  {path:'newdonationplaces', component: CreatePlaceComponent},
  {path:'donations', component: DonationListComponent},
  {path:'newdonation', component: CreateDonationComponent},
  {path:'createnewdonor', component: CreateDonorComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
