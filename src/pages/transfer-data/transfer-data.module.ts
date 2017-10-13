import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferDataPage } from './transfer-data';

@NgModule({
  declarations: [
    TransferDataPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferDataPage),
  ],
})
export class TransferDataPageModule {}
