import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise-directive",
  templateUrl: "./exercise-directive.component.html",
  styleUrls: ["./exercise-directive.component.scss"]
})
export class ExerciseDirectiveComponent implements OnInit {
  name: string;
  isLogin: boolean = false;
  constructor() {}

  ngOnInit() {
    const username = localStorage.getItem("userLogin");
    if (username) {
      this.name = username;
      this.isLogin = true;
    }
  }

  handleLogin(username: string, password: string) {
    if (username === "cybersoft" && password === "cybersoft") {
      this.name = username;
      this.isLogin = true;
      localStorage.setItem("userLogin", username);
    }
  }
}
