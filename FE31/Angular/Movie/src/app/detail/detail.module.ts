import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailIndexComponent } from './detail-index/detail-index.component';
import { LayoutModule } from '../layout/layout.module';
import { DetailRoutingModule } from './detail-routing.module';



@NgModule({
  declarations: [DetailIndexComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DetailRoutingModule
  ],
  exports: [
    DetailIndexComponent,
  ],
})
export class DetailModule { }
