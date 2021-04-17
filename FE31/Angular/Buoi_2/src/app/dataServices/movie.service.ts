import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList: IMovie[] = [
    {id: Math.random().toString(), name:"Avenger 1", image:"https://i.ytimg.com/vi/9FFEDZrzCyw/maxresdefault.jpg", description: "Khá hay"},
    {id: Math.random().toString(), name:"Avenger 2", image:"http://muasi24g.com/wp-content/uploads/2018/06/heo2.jpg", description: "Khá tốt"},
    {id: Math.random().toString(), name:"Avenger 3", image:"https://i.ytimg.com/vi/9FFEDZrzCyw/maxresdefault.jpg", description: "Khá được"},
    {id: Math.random().toString(), name:"Avenger 4", image:"http://muasi24g.com/wp-content/uploads/2018/06/heo2.jpg", description: "Cũng được"}   
  ];
  @Output() movieListEmitter = new EventEmitter();

  deleteMovie(id:string){
    const index = this.movieList.findIndex(item => item.id === id);
    if(index !== -1){
      this.movieList.splice(index, 1);
      this.movieListEmitter.emit(this.movieList);
    }
  }

  createMovie(movie){
    this.movieList.push(movie);
    this.movieListEmitter.emit(this.movieList);
  }

  constructor() { }
}
