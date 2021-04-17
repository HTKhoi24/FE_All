import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/shoppingProduct";
import { CartItem } from 'src/app/models/cartItem';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-shopping-cart-index",
  templateUrl: "./shopping-cart-index.component.html",
  styleUrls: ["./shopping-cart-index.component.scss"]
})
export class ShoppingCartIndexComponent implements OnInit {
  productList: Product[] = [
    {
      id: 1,
      name: "Oppo R1",
      image: "https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg",
      description: "Sản phẩm của china",
      price: 450,
      inventory: 10,
      rating: 3
    },
    {
      id: 2,
      name: "Samsung Galaxy Note 9",
      image:
        "https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg",
      description: "Sản phẩm của Hàn Quốc",
      price: 200,
      inventory: 15,
      rating: 5
    },
    {
      id: 3,
      name: "Iphone XS",
      image:
        "https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782",
      description: "Sản phẩm của US",
      price: 600,
      inventory: 20,
      rating: 4
    }
  ];

  cartList: CartItem[] = [];

  totalAmount:number = 0;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  handleOutputProduct(product: Product){
    // console.log(product);
    const index = this.cartList.findIndex(item => item.product.id === product.id);
    if (index !== -1)
      this.cartList[index].quantity +=1;
    else
      this.cartList.push({product, quantity:1});
      this.calcToTalAmount(product.price, 1);
      this._snackBar.open('Add success', 'OK', {
        duration: 3000,
      })
    // console.log(this.cartList);
  }

  handleOutputItem(e){
    const index = this.cartList.findIndex(item => item.product.id === e.id);
    if (this.cartList[index].quantity !== 0)
      this.cartList[index].quantity += e.num;
    if(this.cartList[index].quantity === 0)
      {
        this.calcToTalAmount(this.cartList[index].product.price, -1);
        return this.cartList.splice(index, 1);
      }
    this.calcToTalAmount(this.cartList[index].product.price, e.num);
  }

  handleDelItem(e: CartItem){
    const index = this.cartList.findIndex(item => item.product.id === e.product.id);
    if(index !== -1){
      this.cartList.splice(index, 1);
      this.calcToTalAmount(e.product.price, e.quantity * -1);
    }
  }

  calcToTalAmount(productPrice, direction){
    this.totalAmount += productPrice * direction;
  }

}
