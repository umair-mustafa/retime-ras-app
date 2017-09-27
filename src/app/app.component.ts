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
 import { CreateStudyPage } from '../pages/create-study/create-study';  // Create Study                  Page 11
// import { SelectrolePage } from '../pages/selectrole/selectrole';                 // Select Role                Page 12
// import { SelectareaPage } from '../pages/selectarea/selectarea';                 // Select Role                Page 13
// import { SelectelementPage } from '../pages/selectelement/selectelement';                 // Select Element                Page 14
// import { DatasubmitPage } from '../pages/datasubmit/datasubmit';                 // Data Submission            Page 27
// import { CreateelementPage } from '../pages/createelement/createelement';        // Create Element             Page 33

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any = CreateStudyPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

