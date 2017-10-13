import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';                                   // Spalsh Screen              Page 01
// import { LoginPage } from '../pages/login/login';                                // Login Page                 Page 02, 03, 04, 07
// import { ResetpassPage } from '../pages/resetpass/resetpass';                    // Password Reset             Page 05
// import { ResetsuccessPage } from '../pages/resetsuccess/resetsuccess';           // Password Reset Successfull Page 06
// import { ProjectsPage } from '../pages/projects/projects';                       // Projects                   Page 08
// import { LocationsPage } from '../pages/locations/locations';                    // Locations                  Page 09
// import { LocationdetailsPage } from '../pages/locationdetails/locationdetails';  // Locations                  Page 10
// import { CreateStudyPage } from '../pages/create-study/create-study';            // Create Study               Page 11
// import { SelectrolePage } from '../pages/selectrole/selectrole';                 // Select Role                Page 12
// import { SelectareaPage } from '../pages/selectarea/selectarea';                 // Select Role                Page 13
// import { SelectelementPage } from '../pages/selectelement/selectelement';        // Select Element             Page 14
// import { EnterRatingPage } from '../pages/enter-rating/enter-rating';            // Enter Rating               Page 15
// import { ApplyRatingPage } from '../pages/apply-rating/apply-rating';            // Apply Rating               Page 16
// import { AddFrequencyPage } from '../pages/add-frequency/add-frequency';         // Apply Rating               Page 17
// import { StudyOptionsPage } from '../pages/study-options/study-options';         // Study Options              Page 18
// import { AddNotesPage } from '../pages/add-notes/add-notes';                     // Add Notes                  Page 19
// import { AddPhotoPage } from '../pages/add-photo/add-photo';                     // Add Notes                  Page 20, 21 
// import { RoundSummaryPage } from '../pages/round-summary/round-summary';         // Round Summary              Page 22 
// import { ObservationPage } from '../pages/observation/observation';              // Observation Summary        Page 23
// import { RasDataPage } from '../pages/ras-data/ras-data';                        // Store RAS Data             Page 24
 import { TransferDataPage } from '../pages/transfer-data/transfer-data';                   // Transferring Data          Page 26
// import { DatasubmitPage } from '../pages/datasubmit/datasubmit';                 // Data Submission            Page 27
// import { CreateelementPage } from '../pages/createelement/createelement';        // Create Element             Page 33

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any = TransferDataPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

