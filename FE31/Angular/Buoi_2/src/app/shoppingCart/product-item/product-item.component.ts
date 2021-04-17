import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/shoppingProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  @Output() productEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleProductChoose(){
    this.productEmitter.emit(this.product);
  }

}
