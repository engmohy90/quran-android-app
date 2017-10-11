import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SocialSharing} from "@ionic-native/social-sharing";
import {HomePage} from '../pages/home/home';
import {LibraryPage} from "../pages/library/library";
import {MostReadedPage} from "../pages/most-readed/most-readed";
import {ClosestPlacePage} from "../pages/closest-place/closest-place";
import {MyfavoritePage} from "../pages/myfavorite/myfavorite";
import {AddreaderPage} from "../pages/addreader/addreader";
import {CallUsPage} from "../pages/call-us/call-us";
import {AboutUsPage} from "../pages/about-us/about-us";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LibraryPage;
  // libraryPage: any = LibraryPage;
  homePage: any = HomePage;
  mostLikedPage: any = MostReadedPage;
  closestPlacePage: any = ClosestPlacePage;
  myFavoritePage: any = MyfavoritePage;
  addReaderPage: any = AddreaderPage;
  callUsPage: any = CallUsPage;
  aboutUsPage: any = AboutUsPage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private socialSharing: SocialSharing) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close()
  }



  share() {
    this.socialSharing.shareWithOptions({
      message: `this app is my frist android app`,
      subject: 'the subject', // fi. for email
      files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    }).then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}

