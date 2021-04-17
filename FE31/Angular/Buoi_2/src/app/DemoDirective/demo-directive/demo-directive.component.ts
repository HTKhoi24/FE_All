import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-directive",
  templateUrl: "./demo-directive.component.html",
  styleUrls: ["./demo-directive.component.scss"]
})
export class DemoDirectiveComponent implements OnInit {
  isShowTitle: boolean = false;
  month: number = 2;
  monthArr: string[] = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"];
  constructor() {}

  ngOnInit() {}

  handleChangeMonth(e) {
    this.month = e.target.value;
  }
}
