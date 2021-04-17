import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit, AfterViewInit, OnDestroy {

  name:string = "hieu";

  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("ngOnInit");
    // setInterval(() => {
    //   this.name += "n";
    // }, 200);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

  ngDoCheck(){
    console.log('something change');
  }
}
