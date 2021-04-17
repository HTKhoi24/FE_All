import {SanPham} from './SanPham.js';

export class LapTop extends SanPham{

    ram;
    rom;
    manHinh;
    constructor(){
        // super là hàm bắt buộc đại diện cho constructor của class cha
        super();
    };
    layThongTinSanPham(){
        // gọi phương thức kế thừa từ lớp cha
        super.layThongTinSanPham();
    };
}