import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {MovieServiceProvider} from "../../providers/movie-service/movie-service";



@IonicPage()
@Component({
  selector: 'page-in-theatres',
  templateUrl: 'in-theatres.html',
})
export class InTheatresPage {

  inTheatres:any[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public movieService:MovieServiceProvider) {
  }

  ionViewDidLoad() {

    //call the getInTheatres function from the movie service
    this.movieService.getInTheaters().subscribe(data => {

        //store the response on our empty array
        this.inTheatres = data.results;

      });

    console.log('ionViewDidLoad InTheatresPage');
  }


  launchMovieDetailsPage(movie){

    //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

}
