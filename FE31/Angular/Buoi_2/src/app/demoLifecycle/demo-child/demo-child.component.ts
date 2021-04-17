import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.scss']
})
export class DemoChildComponent implements OnInit, OnChanges {

  @Input() name:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change){
    console.log(change);
  }

}
