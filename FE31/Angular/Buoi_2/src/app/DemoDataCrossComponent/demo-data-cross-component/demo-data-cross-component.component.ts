import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-cross-component',
  templateUrl: './demo-data-cross-component.component.html',
  styleUrls: ['./demo-data-cross-component.component.scss']
})
export class DemoDataCrossComponentComponent implements OnInit {
  studentArr:{id:string, name:string, age:number}[] = [
    {id:'1', name:'Dang Trung Hieu', age:12},
    {id:'2', name:'Cao Chi Hieu', age:16},
    {id:'3', name:'Ngo Gia Thinh', age:13},
    {id:'4', name:'Nguyen Hoang Dung', age:15},
  ];
  chosenStudent:{id:string, name:string, age:number};

  constructor() { }

  ngOnInit() {
  }

  handleOutputStudent(student){
    // console.log(student);
    this.chosenStudent = student;
  }

}
