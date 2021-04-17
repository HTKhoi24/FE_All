import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailIndexComponent } from './detail-index/detail-index.component';


const routes: Routes = [
    {
        path: "",
        component: DetailIndexComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }