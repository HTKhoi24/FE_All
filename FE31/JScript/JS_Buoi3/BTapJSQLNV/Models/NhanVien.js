// Models là nơi chứa các class đối tượng trong javascript
// class trong js gọi là prototype

function NhanVien(){
    // Khai báo thuộc tính
    this.maNV = '';
    this.tenNV = '';
    this.maChucVu = '';
    this.tenChucVu = '';
    this.luongCB = '';
    this.soGioLam = '';
    this.email = '';
    this.tinhLuong = function () {
        if (this.maChucVu === "giamDoc") {
            this.tongLuong = this.luongCB * 3;
        }
        else if (this.maChucVu === "truongPhong") {
            this.tongLuong = this.luongCB * 2;
        }
        else if (this.maChucVu === "nhanVien") {
            this.tongLuong = this.luongCB;
        }
        return this.tongLuong;
    };
    this.xepLoaiNhanVien = function () {
        if (this.soGioLam > 120) {
            return 'Xuất Sắc';
        }
        else if (this.soGioLam > 100) {
            return 'Giỏi';
        }
        else if (this.soGioLam > 80) {
            return 'Khá';
        }
        else if (this.soGioLam > 50) {
            return 'Trung Bình';
        }
        else {
            return 'Đuổi';
        }
    };
}