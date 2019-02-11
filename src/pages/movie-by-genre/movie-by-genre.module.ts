import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieByGenrePage } from './movie-by-genre';

@NgModule({
  declarations: [
    MovieByGenrePage,
  ],
  imports: [
    IonicPageModule.forChild(MovieByGenrePage),
  ],
})
export class MovieByGenrePageModule {}
