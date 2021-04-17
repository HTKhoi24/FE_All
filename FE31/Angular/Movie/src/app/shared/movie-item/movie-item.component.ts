import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movieItem: IMovie;
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}
