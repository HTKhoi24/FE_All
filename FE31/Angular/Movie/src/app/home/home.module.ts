import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeIndexComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeIndexComponent,
  ],
})
export class HomeModule { }
