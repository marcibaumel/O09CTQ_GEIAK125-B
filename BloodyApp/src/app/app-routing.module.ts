import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationListComponent } from './donation-list/donation-list.component';
import { NewDonationComponent } from './new-donation/new-donation.component';
import { NewDonorComponent } from './new-donor/new-donor.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'places', component: PlaceListComponent },
  { path: 'newplace', component: NewPlaceComponent },
  { path: 'newdonor', component: NewDonorComponent },
  { path: 'newdonation', component: NewDonationComponent },
  { path: 'donations', component: DonationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
