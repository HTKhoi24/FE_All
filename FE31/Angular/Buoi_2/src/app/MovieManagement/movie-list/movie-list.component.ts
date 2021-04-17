import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/dataServices/movie.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: IMovie[];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.movieList = this._movieService.movieList;
    this._movieService.movieListEmitter.subscribe(res => {
      this.movieList = res;
    });
  }

}
