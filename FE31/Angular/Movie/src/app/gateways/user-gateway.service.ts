import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGatewayService {
  baseUrl = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/";
  signUp(data){
    return this._http.post(`${this.baseUrl}DangKy`, data);

  }
  signIn(data){
    return this._http.post(`${this.baseUrl}DangNhap`, data);
  }

  constructor(private _http: HttpClient) { }
}
