import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() studentItem:{id:string, name:string, age:number};
  @Output() studentEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleChooseStudent(){
    this.studentEmitter.emit(this.studentItem);
  }

}
