// document.getElementById('btnXacNhan').onclick = function(){
//     // lấy thông tin người dùng nhập vào thông qua id
//     var maSV = document.getElementById('maSV').value;
//     var tenSV = document.getElementById('tenSV').value;
//     var loaiSV = document.getElementById('loaiSV').value;
//     var diemToan = document.getElementById('diemToan').value;
//     var diemLy = document.getElementById('diemLy').value;
//     var diemHoa = document.getElementById('diemHoa').value;
//     var diemRenLuyen = Number(document.getElementById('diemRenLuyen').value);

//     //Tính điểm trung bình
//     var diemTB = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
//     // Hàm number để ép kiểu từ string qua int 

//     //Dom hiển thị thông tin người dùng
//     document.getElementById('txtMaSV').innerHTML = maSV;
//     document.getElementById('txtTenSV').innerHTML = tenSV;
//     document.getElementById('txtLoaiSV').innerHTML = loaiSV;
//     document.getElementById('txtDiemTB').innerHTML = diemTB;
//     document.getElementById('txtXepLoai').innerHTML = xepLoai(diemTB, diemRenLuyen);
// }

// //Viết hàm xử lí xếp loại
// function xepLoai(diemTB, diemRenLuyen){
//     if(diemRenLuyen < 5){
//         return 'Yếu';
//     }
//     else if(diemRenLuyen >= 5 && diemRenLuyen < 6.5 && diemTB >= 6.5){
//         return 'Trung Bình';
//     }
//     else if(diemRenLuyen >= 6.5 && diemRenLuyen < 8 && diemTB >= 6.5){
//         return 'Khá';
//     }
//     else if(diemRenLuyen > 8 && diemTB > 8){
//         return 'Giỏi';
//     }
//     else {
//         return 'Khá';
//     }
// }


//OOP
document.getElementById('btnXacNhan').onclick = function(){
    
    // Cú pháp khai báo đối tượng trong JS
    // var tenObject = {
    //     property1: 'value1',
    //     property2: 'value2',
    //     . . .
    // }

    var sinhVien = {
        maSV: document.getElementById('maSV').value,
        tenSV: document.getElementById('tenSV').value,
        loaiSV: document.getElementById('loaiSV').value,
        diemToan: document.getElementById('diemToan').value,
        diemLy: document.getElementById('diemLy').value,
        diemHoa: document.getElementById('diemHoa').value,
        diemRenLuyen: Number(document.getElementById('diemRenLuyen').value),
        diemTB: 0,
        tinhDiemTrungBinh: function(){      // Phương thức ( hàm chỉ sử dụng cho dối tượng sinhVien )
            
            //this: chỉ đối tượng (sinhVien) đang chứa các thuộc tính này (diemToan, diemLy, diemHoa)
            this.diemTB = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
            return this.diemTB;
        },
        xepLoai: function(){
            //Gọi phương thức tính điểm trung bình => láy giá trị cho thuộc tính diemTB
            this.tinhDiemTrungBinh();
            if(this.diemRenLuyen < 5){
                        return 'Yếu';
                    }
                    else if(this.diemRenLuyen >= 5 && this.diemRenLuyen < 6.5 && this.diemTB >= 6.5){
                        return 'Trung Bình';
                    }
                    else if(this.diemRenLuyen >= 6.5 && this.diemRenLuyen < 8 && this.diemTB >= 6.5){
                        return 'Khá';
                    }
                    else if(this.diemRenLuyen > 8 && this.diemTB > 8){
                        return 'Giỏi';
                    }
                    else {
                        return 'Khá';
                    }
        }
    }

    //Tính điểm trung bình
    // var diemTB = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
    // Hàm number để ép kiểu từ string qua int 

    //Dom hiển thị thông tin người dùng
    document.getElementById('txtMaSV').innerHTML = sinhVien.maSV;
    document.getElementById('txtTenSV').innerHTML = sinhVien.tenSV;
    document.getElementById('txtLoaiSV').innerHTML = sinhVien.loaiSV;
    document.getElementById('txtDiemTB').innerHTML = sinhVien.tinhDiemTrungBinh();
    document.getElementById('txtXepLoai').innerHTML = sinhVien.xepLoai();
}