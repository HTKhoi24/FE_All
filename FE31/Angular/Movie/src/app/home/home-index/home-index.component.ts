import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie';
import { MovieGatewayService } from 'src/app/gateways/movie-gateway.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
  movieList: IMovie[];

  constructor(private _movieService: MovieService, private _movieGateway: MovieGatewayService) { }

  ngOnInit() {
    this._movieGateway.fetchMovies().subscribe( 
      (res: IMovie[]) => 
      {
        console.log(res);
        this._movieService.setMovieList(res);
      },
      (err) => {console.log(err.error)}
      );

    this.movieList = this._movieService.movieList;
    this._movieService.movieListEmitter.subscribe( res => {
      this.movieList = res;
    });
  }

}
