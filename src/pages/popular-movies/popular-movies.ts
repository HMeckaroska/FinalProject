import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { MovieServiceProvider} from "../../providers/movie-service/movie-service";

/**
 * Generated class for the PopularMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular-movies',
  templateUrl: 'popular-movies.html',
})
export class PopularMoviesPage {

  popularMovies:any[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public movieService: MovieServiceProvider) {
  }


  ionViewDidLoad() {

    //call the getPopularMovies function from the movie service
    this.movieService.getPopularMovies()
      .subscribe(res => {

        console.log(res.results);

        //store the response on our empty array
        this.popularMovies = res.results;

      });

    console.log('ionViewDidLoad PopularMoviesPage');
  }

  launchMovieDetailsPage(movie) {

    //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();


  }
}
