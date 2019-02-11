import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from "@angular/fire/auth";



export class User{

  email:string;
}

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {


  public user: User = new User();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ToastCtrl:ToastController,
              public loadingCtrl:LoadingController,
              public fAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }



  displayToast(message) {
    let toast = this.ToastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }




 async resetPassword( user: User) {

try {
  const r =  this.fAuth.auth.sendPasswordResetEmail(this.user.email);

 if (r){

 const loading =  this.loadingCtrl.create({content:'Please wait'});
loading.present();
setTimeout(() => {
  loading.dismiss();
   this.displayToast("A reset-password link has been sent to your Email address");
   },5000);
 }
}


  catch (err){

  this.displayToast("Please enter valid Email");
  console.log(err);

      }
    }




}
