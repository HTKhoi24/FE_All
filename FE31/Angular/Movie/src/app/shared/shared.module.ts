import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MovieItemComponent, ShortenPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MovieItemComponent,
    ShortenPipe,
  ],
})
export class SharedModule { }
