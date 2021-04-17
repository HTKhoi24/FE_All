import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-oneway",
  templateUrl: "./demo-oneway.component.html",
  styleUrls: ["./demo-oneway.component.scss"]
})
export class DemoOnewayComponent implements OnInit {
  name: string = "cybersoft";
  disabledInput: boolean = false;
  email: string;
  phoneNumber: string;
  constructor() {}

  ngOnInit() {}

  getEmailHandler(e): void {
    console.log(e.target.value);
    this.email = e.target.value;
  }

  getEmailByClickHanlder(email) {
    this.email = email;
  }
  
}
