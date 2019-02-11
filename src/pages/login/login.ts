import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController   } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Storage } from "@ionic/storage";
import { AngularFireAuth} from "@angular/fire/auth";






export class User {
  email:string;
  password: string;

}



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User = new User();


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public ToastCtrl: ToastController,
              private storage: Storage,
              public fAuth: AngularFireAuth) {


  }


  displayToast(message) {
    let toast = this.ToastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



  async login() {


    try {

      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      if (r) {

        const loading = this.loadingCtrl.create({ content: 'Please wait'});
        loading.present();
        setTimeout(() => {
          loading.dismiss();
          this.displayToast("Successfully logged in");
          this.storage.set('App.userId', 10);
          this.navCtrl.setRoot(TabsPage);
        },5000);

      }


    }
    catch (err) {

      console.log(err);
      this.displayToast("Valid Email and Password are required");

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  SingUp(){

    this.navCtrl.push('RegisterPage');
  }



   forgotPassword() {


  this.navCtrl.push('PasswordPage');



  }





}
