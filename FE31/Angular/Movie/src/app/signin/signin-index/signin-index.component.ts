import { Component, OnInit } from "@angular/core";
import { UserGatewayService } from "src/app/gateways/user-gateway.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signin-index",
  templateUrl: "./signin-index.component.html",
  styleUrls: ["./signin-index.component.scss"]
})
export class SigninIndexComponent implements OnInit {
  constructor(private _userGateway: UserGatewayService) {}

  ngOnInit() {}

  handleSignIn(formSignIn: NgForm) {
    this._userGateway.signIn({...formSignIn.form.value}).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('credentials', JSON.stringify(res));
      },
      err => {
        console.log(err);
      }
    );
  }
}
