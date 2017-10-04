import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RasDataPage } from './ras-data';

@NgModule({
  declarations: [
    RasDataPage,
  ],
  imports: [
    IonicPageModule.forChild(RasDataPage),
  ],
})
export class RasDataPageModule {}
