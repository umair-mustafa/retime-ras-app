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
import { CreateStudyPage } from '../pages/create-study/create-study';
import { SelectrolePage } from '../pages/selectrole/selectrole';
import { SelectareaPage } from '../pages/selectarea/selectarea';
import { SelectelementPage } from '../pages/selectelement/selectelement'; 
import { EnterRatingPage } from '../pages/enter-rating/enter-rating';
import { ApplyRatingPage } from '../pages/apply-rating/apply-rating';
import { AddFrequencyPage } from '../pages/add-frequency/add-frequency';
import { StudyOptionsPage } from '../pages/study-options/study-options';
import { AddNotesPage } from '../pages/add-notes/add-notes';
import { AddPhotoPage } from '../pages/add-photo/add-photo'; 
import { DatasubmitPage } from '../pages/datasubmit/datasubmit';
import { CreateelementPage } from '../pages/createelement/createelement';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetpassPage,
    ResetsuccessPage,
    ProjectsPage,
    LocationsPage,
    LocationdetailsPage,
    CreateStudyPage,
    SelectrolePage,
    SelectareaPage,
    SelectelementPage,
    EnterRatingPage,
    ApplyRatingPage,
    AddFrequencyPage,
    StudyOptionsPage,
    AddNotesPage,
    AddPhotoPage,
    DatasubmitPage,
    CreateelementPage
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
    ProjectsPage,
    LocationsPage,
    LocationdetailsPage,
    CreateStudyPage,
    SelectrolePage,
    SelectareaPage,
    SelectelementPage,
    EnterRatingPage,
    ApplyRatingPage,
    AddFrequencyPage,
    StudyOptionsPage,
    AddNotesPage,
    AddPhotoPage,
    DatasubmitPage,
    CreateelementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
