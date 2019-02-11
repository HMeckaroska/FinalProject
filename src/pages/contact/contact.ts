import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth} from "@angular/fire/auth";
import {Storage} from "@ionic/storage";
import { App } from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public fAuth: AngularFireAuth,
              public appCtrl: App,
              private storage:Storage) {

  }

  logOut(){

    this.fAuth.auth.signOut();
    this.appCtrl.getRootNav().setRoot(LoginPage);
    this.storage.set('App.userId',0);


  }




  }


