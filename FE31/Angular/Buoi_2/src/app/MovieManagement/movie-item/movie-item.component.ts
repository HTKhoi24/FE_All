import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/dataServices/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movieItem:IMovie;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }

  handleDeleteMovie(){
    // xóa movie bằng id
    this._movieService.deleteMovie(this.movieItem.id);
  }

}
