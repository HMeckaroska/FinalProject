import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Storage} from "@ionic/storage";



@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage:any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private storage: Storage)

  {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      storage.get('App.userId').then((val)=> {

        if(val && val > 0){

          this.rootPage=TabsPage;
        }
        else if (val == 0){

          this.rootPage = 'LoginPage';
        }
        else {
          storage.get('App.introSlides').then((val)=> {
            this.rootPage = val ? 'LoginPage' : 'IntroPage';
          });
        }
      });

    });


  }
}
