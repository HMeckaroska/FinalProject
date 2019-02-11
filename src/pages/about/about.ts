import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { MovieServiceProvider} from "../../providers/movie-service/movie-service";



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  genres:any[]=[]; // empty array vo koja ce bidat prikazani razni genres na filmovite

  constructor(public navCtrl: NavController,
              public movieService: MovieServiceProvider,
              public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {

    this.movieService.getGenres().subscribe(data => {


      this.genres = data.genres;
    });

    console.log('ionViewDidLoad InTheatresPage');

  }

  launchMoviesByGenrePage(genre){

    this.navCtrl.push('MovieByGenrePage',genre);

  }

  launchSearchModal(){

    let modal = this.modalCtrl.create('SearchPage');
    modal.present();

  }

  openInTheatresPage(){

    this.navCtrl.push('InTheatresPage');
  }
  openPopularMoviesPAge(){

    this.navCtrl.push('PopularMoviesPage');
  }


}
