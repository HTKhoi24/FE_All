import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ISelectedMovie } from 'src/app/models/movie';
import { MovieGatewayService } from 'src/app/gateways/movie-gateway.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss']
})
export class DetailIndexComponent implements OnInit {
  selectedMovie: ISelectedMovie;
  id: any;

  constructor(private _movieService: MovieService, private _movieGateway: MovieGatewayService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamsFromUrl();
    this.getListMovie();
  }

  getListMovie(){
    this._movieGateway.fetchMovieDetail(this.id).subscribe(
      (res: ISelectedMovie) => 
      {
        console.log(res);
        this._movieService.setSelectedMovie(res);
      },
      (err) => {console.log(err.error)}
    )
    this.selectedMovie = this._movieService.selectedMovie;
    this._movieService.selectedMovieEmitter.subscribe(res => {
      this.selectedMovie = res;
    })
  }

  getParamsFromUrl(){
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }

}
