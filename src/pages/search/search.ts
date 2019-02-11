import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { MovieServiceProvider} from "../../providers/movie-service/movie-service";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  results:any[]=[]; // array to hold the results from search

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public movieService: MovieServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  searchMovies(ev: any){

    let val = ev.target.value;

    this.movieService.searchMovies(val).subscribe(data=>{

      console.log(data.results);
      this.results = data.results;

    });
  }

  launchMoviesDetailsPage(movie){

    let movieModal= this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();

  }

  dismiss(){

    this.viewCtrl.dismiss();
  }


}
