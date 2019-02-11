import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth} from "@angular/fire/auth";
import { InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";




export class User {

  email: string;
  password: string;

}


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {



  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'pagesheet',//iOS only
    fullscreen: 'yes',//Windows only
  };






  public user:User = new User ();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ToastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public fAuth: AngularFireAuth,
              private inApp: InAppBrowser) {
  }



  displayToast(message) {
    let toast = this.ToastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



  async register(){

    try {

      var r = await this.fAuth.auth.createUserWithEmailAndPassword(

        this.user.email,
        this.user.password

      );


      if (r) {


       const loading = this.loadingCtrl.create({content: 'Please wait' });
       loading.present();

       setTimeout(() => {
         loading.dismiss();
         this.displayToast("Successfully registered!");
         this.displayToast("Now You are free to log in");
         console.log("Successfully registered!");
         this.navCtrl.setRoot('LoginPage');
       },5000 );

      }
    }
    catch (err){

      this.displayToast("Please enter valid Email and Password");
      console.error(err);
    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



openWithSystemBrowser(url:string){

    let target = "_system";
    this.inApp.create(url, target, this.options);

}


}
