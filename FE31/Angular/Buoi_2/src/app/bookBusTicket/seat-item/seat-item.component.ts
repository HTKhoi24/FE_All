import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISeat } from 'src/app/models/seat';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {
  @Input() seatItem: ISeat;
  @Output() seatEmitter = new EventEmitter();
  isChosen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleChooseSeat(){
    if(!this.seatItem.TrangThai){
      this.isChosen = !this.isChosen;
      this.seatEmitter.emit(this.seatItem);
    }
  }

}
