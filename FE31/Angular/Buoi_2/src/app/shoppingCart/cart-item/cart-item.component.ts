import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:CartItem;
  @Output() cartEmitter = new EventEmitter();
  @Output() cartDelEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleQuantity(num){
    this.cartEmitter.emit({id: this.cartItem.product.id, num});
  }

  handleDelItem(){
    this.cartDelEmitter.emit(this.cartItem);
  }

}
