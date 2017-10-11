import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LibraryPage} from "../pages/library/library";
import {MostReadedPage} from "../pages/most-readed/most-readed";
import {AboutUsPage} from "../pages/about-us/about-us";
import {AddreaderPage} from "../pages/addreader/addreader";
import {CallUsPage} from "../pages/call-us/call-us";
import {ClosestPlacePage} from "../pages/closest-place/closest-place";
import {MyfavoritePage} from "../pages/myfavorite/myfavorite";
import {SocialSharing} from "@ionic-native/social-sharing";
import {ShikInfoPage} from "../pages/shik-info/shik-info";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    MostReadedPage,
    AboutUsPage,
    AddreaderPage,
    CallUsPage,
    ClosestPlacePage,
    MyfavoritePage,
    ShikInfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    MostReadedPage,
    AboutUsPage,
    AddreaderPage,
    CallUsPage,
    ClosestPlacePage,
    MyfavoritePage,
    ShikInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {
}
