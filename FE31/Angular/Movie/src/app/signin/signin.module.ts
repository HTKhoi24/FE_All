import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninIndexComponent } from './signin-index/signin-index.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [SigninIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SigninIndexComponent,
  ]
})
export class SigninModule { }
