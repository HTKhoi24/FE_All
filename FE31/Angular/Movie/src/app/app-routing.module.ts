import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: "",
        loadChildren: "./home/home.module#HomeModule",
    },
    {
        path: "signup",
        loadChildren: "./signup/signup.module#SignupModule",
    },
    {
        path: "detail/:id",
        loadChildren: "./detail/detail.module#DetailModule",
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }