import { Component, OnInit } from "@angular/core";
import { IProduct, Product } from "src/app/models/product";

@Component({
  selector: "app-product-management",
  templateUrl: "./product-management.component.html",
  styleUrls: ["./product-management.component.scss"]
})
export class ProductManagementComponent implements OnInit {
  prodList: IProduct[] = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 }
  ];
  page:number = 1;

  constructor() {}
  tdWidth: number = 300;
  ngOnInit() {}
  addProductHandler(prodId, prodName, prodPrice) {
    const newProduct = new Product(prodId, prodName, prodPrice);
    const index = this.prodList.findIndex(
      item => item.MaSP === newProduct.MaSP
    );
    index === -1
      ? this.prodList.push(newProduct)
      : alert("Sản phẩm đã tồn tại");
  }

  handleChangePage(e){
    this.page = e;
  }
}
