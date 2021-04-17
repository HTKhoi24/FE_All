import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e3-index',
  templateUrl: './e3-index.component.html',
  styleUrls: ['./e3-index.component.scss']
})
export class E3IndexComponent implements OnInit {
  email: string;
  fullName: string;

  constructor() { }

  ngOnInit() {
  }

  getEmailByClickHandler(fullName){
    this.fullName = fullName;
  }

}
