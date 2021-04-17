import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieGatewayService {
  baseUrl = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/"

  constructor(private _http: HttpClient) { }

  fetchMovies(){
    return this._http.get(`${this.baseUrl}LayDanhSachPhim?maNhom=GP09`)
  }

  fetchMovieDetail(id){
    return this._http.get(`${this.baseUrl}LayThongTinPhim?MaPhim=${id}`);
  }

}
