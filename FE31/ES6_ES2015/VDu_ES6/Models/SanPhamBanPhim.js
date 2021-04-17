import {SanPham} from './SanPham.js';

export class BanPhim extends SanPham{
    tinhNangChongNuoc = true;
    constructor(){
        super();
    };
    layThongTinSanPham(){
        console.log('tên SP: ' + this.tenSP);
        console.log('Tính năng chống nước: ' + this.tinhNangChongNuoc);
    }
}