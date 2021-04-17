// Khai báo prototype ES6
// export class SanPham{
export class SanPham{
    maSP = '';
    tenSP = '';
    constructor(){      // constructor đại diện cho function() của jsPrototype

    }
    layThongTinSanPham = () => {
        console.log(`maSP: ${this.maSP} - tenSP: ${this.tenSP}`);
    }
}

/* 1 file có thể có nhiều export - nhưng nếu sử dụng export default 
thì chỉ có thể export 1 lần cho 1 file khi import có thể đổi tên
 */
// export default SanPham;