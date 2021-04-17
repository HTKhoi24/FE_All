import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupIndexComponent } from './signup-index/signup-index.component';


const routes: Routes = [
    {
        path: "",
        component: SignupIndexComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }