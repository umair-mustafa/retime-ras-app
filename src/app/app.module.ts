import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResetpassPage } from '../pages/resetpass/resetpass';
import { ResetsuccessPage } from '../pages/resetsuccess/resetsuccess';
import { ProjectsPage } from '../pages/projects/projects';
import { LocationsPage } from '../pages/locations/locations';
import { LocationdetailsPage } from '../pages/locationdetails/locationdetails';
import { DatasubmitPage } from '../pages/datasubmit/datasubmit';
import { CreateelementPage } from '../pages/createelement/createelement';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpassPage,
    ResetsuccessPage,
    DatasubmitPage,
    CreateelementPage,
    ProjectsPage,
    LocationsPage,
    LocationdetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpassPage,
    ResetsuccessPage,
    DatasubmitPage,
    CreateelementPage,
    ProjectsPage,
    LocationsPage,
    LocationdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
