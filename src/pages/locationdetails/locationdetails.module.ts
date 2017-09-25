import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationdetailsPage } from './locationdetails';

@NgModule({
  declarations: [
    LocationdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationdetailsPage),
  ],
})
export class LocationdetailsPageModule {}
