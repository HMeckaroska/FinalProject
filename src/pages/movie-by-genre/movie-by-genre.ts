import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieServiceProvider} from "../../providers/movie-service/movie-service";

/**
 * Generated class for the MovieByGenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-by-genre',
  templateUrl: 'movie-by-genre.html',
})
export class MovieByGenrePage {

  movies:any[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public movieService: MovieServiceProvider) {
  }

  ionViewDidLoad() {

    this.movieService.getMoviesByGenre(this.navParams.get('id')).subscribe(data => {

      this.movies = data.results;
      console.log(this.movies);



    });




    console.log('ionViewDidLoad MovieByGenrePage');
  }


  launchMovieDetailsPage(movie){


    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();

  }
}
