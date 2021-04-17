import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie, ISelectedMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList: IMovie[] = [];
  @Output() movieListEmitter = new EventEmitter<IMovie[]>();
  selectedMovie: ISelectedMovie;
  @Output() selectedMovieEmitter = new EventEmitter<ISelectedMovie> ();

  constructor() { }

  setMovieList(movieList: IMovie[]){
    this.movieList = movieList;
    this.movieListEmitter.emit(this.movieList);
  }

  setSelectedMovie(selectedMovie: ISelectedMovie){
    this.selectedMovie = selectedMovie;
    this.selectedMovieEmitter.emit(this.selectedMovie);
  }
}
