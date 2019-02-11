import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { App } from './app.component';




import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from "@ionic/storage";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {HttpModule} from "@angular/http";
import {MovieServiceProvider} from "../providers/movie-service/movie-service";



import { AngularFireModule} from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { enviroment} from "../enviroment/enviroment";



@NgModule({
  declarations: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireAuthModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    MovieServiceProvider


  ]
})
export class AppModule {}
