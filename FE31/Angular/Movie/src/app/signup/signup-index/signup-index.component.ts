import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserGatewayService } from "src/app/gateways/user-gateway.service";

@Component({
  selector: "app-signup-index",
  templateUrl: "./signup-index.component.html",
  styleUrls: ["./signup-index.component.scss"]
})
export class SignupIndexComponent implements OnInit {
  constructor(private _userGateway: UserGatewayService) {}

  ngOnInit() {}

  handleSignUp(formSignup: NgForm) {
    // console.log(formSignup);
    this._userGateway
      .signUp({
        ...formSignup.form.value,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang"
      })
      .subscribe(
        res => {
          console.log(res);
          formSignup.resetForm();
        },
        err => {
          console.log(err);
        }
      );
  }
}
