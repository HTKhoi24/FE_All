//ANCHOR 
// // Khai báo biến với từ khóa let : có thể thay đổi giá trị
// let number = 1;

// // Khai báo biến với từ khóa const : chỉ gán được 1 giá trị ko đổi
// const PI = 3.14;

// // So sánh var và let
// /*
//     tất cả biến nên dùng let cho đỡ trùng nhau
//     var chỉ dùng khi cần sử dụng trong nhiều scope khác nhau
// */
// let a = 5;

// {// trong ngoặc gọi là scope / scoope
//     let a = 10;
//     console.log('Giá trị a trong ngoặc : ',a);
// }
// console.log('Giá trị a ngoài ngoặc: ', a);


// var myBtn = document.getElementsByTagName('button');
// // for(var i = 0; i < myBtn.length; i++){
// //     myBtn[i].onclick = function(){
// //         alert("nút số " + (i + 1));
// //     }
// // }

// for(let i = 0; i < myBtn.length; i++){
//     myBtn[i].onclick = function(){
//         alert("nút số " + (i + 1));
//     }
// }

/*
    Trong js mặc định khi khai báo for, if, . . . 
    thì sẽ tạo ra 1 scope là trong {     }
    var hoạt động trên tất cả các scope
    không cần khai báo biến, mặc định là var
    let hoạt động trong phạm vi trong scope
 */

//  // Khái niệm arrow function ANCHOR 
//  //viết theo es5
//  function test(param){
//      console.log('hello' + param);
//      return 'hello' + param;
//  }

//  // viết theo es6
//  let testES6 = (param) => {
//      console.log('lello' + param);
//      return 'lello' + param;
//  };

// console.log(testES6('cybersoft'));

//VDu arrow function
// // ES5
// let hocVien = {
//     hoTen : 'Nguyen Van A',
//     lop: 'FontEnd XXXX',
//     layThongTinHocVien: function(){
//         function hienThiThongTin(){
//             console.log(`Ho ten: ${this.hoTen} - lop: ${this.lop}`);    // this chỉ kiếm trong function ra 1 cấp, nếu ko có sẽ kiếm biến global như window.hoTen = var hoTen = 'hoTenA'
//         }
//         hienThiThongTin();
//     }
// };
// // dùng đối tượng hocVien goi phương thức layThongTinHocVien()
// hocVien.layThongTinHocVien();

// // ES6
// let hocVien1 = {
//     hoTen: 'Nguyen Van B',
//     lop: 'FrontEnd XXX',
//     layThongTinHocVien: function(){
//         let hienThiThongTin = () => {   // Sử dụng function ES6
//             console.log(`Ho ten: ${this.hoTen} - lop: ${this.lop}`);
//         }
//         hienThiThongTin();
//     }
// }
// // dùng đối tượng hocVien1 gọi phương thức layThongTinHocVien()
// hocVien1.layThongTinHocVien();


// // rest param
// // function tinhTong(num1, num2, num3){
// //     console.log('tinhTong1: ' ,num1 + num2 + num3);
// // }

// // function tinhTong(num1, num2){
// //     console.log('tinhTong2: ',num1 + num2);
// // }

// // tinhTong(1,2,3);

// function tinhTong(...restParam){
//     let tong = 0;
//     for (let i = 0; i < restParam.length; i++){
//         tong += restParam[i];
//     }
//     console.log(tong);
    
//     // Xử lí cho các trường hợp tham số cụ thể
//     //  switch(restParam.length){
//     //     case 2:{

//     //     }
//     //     case 3:{

//     //     }
//     // }
//     console.log(restParam);
// }

// tinhTong(1,2,3);
// tinhTong(1,2,3,4,5,6);


// // SPREAD OPERATOR VỚI OBJECT

// // let nhanVienA = {maNV: 1, hoTen: 'Nguyen van A'};
// // let nhanVienB = nhanVienA;
// // nhanVienB.hoTen = 'Nguyen Van B';

// // console.log('nhan vien a', nhanVienA.hoTen);
// // console.log('nhan vien b', nhanVienB.hoTen);

// /* ANCHOR  Kết quả :
//     nhan vien a Nguyen Van B
//     nhan ven b Nguyen Van B

//     Do nhanVienA là một con trỏ đến vùng nhớ, gán nhanVienB là A cũng sẽ trỏ vùng nhớ của A luôn
//     nên khi thay đổi biến B sẽ làm biến A thay đổi theo

//     CÓ THỂ HỎI TRONG PHỎNG VẤN
// */

// // Giải quyết : spread operator
// let nhanVienA = {maNV: 1, hoTen: 'Nguyen van A'};
// let nhanVienB = {...nhanVienA, lop: 'frontend31', hoTen: 'Nguyen Van B'}; // spread operator   có thêm giá trị
// // nhanVienB.hoTen = 'Nguyen Van B';

// console.log('nhan vien a', nhanVienA.hoTen);
// console.log('nhan vien b', nhanVienB);

// // SPREAD OPERATOR VỚI ARRAY
// let mangA = [1, 2, 3, 4, 5];
// let mangB = [...mangA, 6, 7];
// mangB.push(6);
// console.log(mangA);
// console.log(mangB);


// // CONST : không thể gán giá trị bằng 1 object khác nhưng có thể thay đổi giá trị từng thuộc tính
// const objectA = {prop1:1, prop2:'a'};
// objectA.prop1 = 2;
// objectA.prop2 = 'b';
// console.log(objectA);


// // DEFAULT PARAMS
// // nếu như khi gọi hàm không truyền tham số thì sẽ lấy giá trị mặc định
// // Khi truyền tham số thì không lấy giá trị mặc định 
// function getInfo(hoTen = 'Nguyen Van A', namSinh = 1000, tuoi = 2020 - namSinh){
//     console.log(` Họ tên: ${hoTen} - Tuổi: ${tuoi} `);
// }
// getInfo();
// getInfo('Trần Văn B');
// getInfo('Trần Văn C', 2000);
// getInfo('Trần văn E', 2000);
// getInfo('Trần Văn E', 2000, 17);


// // ANCHOR  DESTRUCTURING VỚI OBJECT
// let phim = {
//     maPhim: 1,
//     tenPhim:'EndGame',
//     quocGia:'Mỹ',
//     hinhAnh: 'https://picsum.photos/50/50',
//     thongTinKhac:{
//         tenDaoDien:'Nguyen Van A',
//         tenDienVien:'DV1, DV2',
//         moTa:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maiores.'
//     },
//     layThongTinMoTa: function(){
//         return phim.thongTinKhac.moTa;
//     }
// }
// // ES5
// // var maPhim = phim.maPhim;
// // var tenPhim = phim.tenPhim;
// // var hinhAnh = phim.hinhAnh;
// // var moTa = phim.thongTinKhac.moTa;

// //ES6
// var {maPhim, tenPhim, hinhAnh, quocGia, layThongTinMoTa} = phim;
// var {moTa, tenDaoDien, tenDienVien} = phim.thongTinKhac;

// var content = `
// <div class="container">
//   <div class="card text-left col-4">
//     <img class="card-img-top" src="${hinhAnh}" alt="">
//     <div class="card-body">
//       <h4 class="card-title">${maPhim}</h4>
//       <p class="card-text">${layThongTinMoTa()}</p>
//     </div>
//   </div>
// </div>
// `;
// document.querySelector('body').innerHTML = content;

// // DESTRUCTURING VỚI MẢNG
// let phimArr = [
//     1,
//     'EndGame',
//     'Mỹ',
//     'https://picsum.photos/50/50',
//     {
//         tenDaoDien:'Nguyen Van A',
//         tenDienVien:'DV1, DV2',
//         moTa:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maiores.'
//     },
//     function(){
//         return phimArr[4].moTa;
//     }
// ]
// // Log ra thông tin mô tả và tên phim
// let [maPhim, tenPhim, quocGia, hinhAnh, thongTinPhim, layThongTinPhim] = phimArr;
// console.log('tên phim', tenPhim);
// console.log('mô tả', thongTinPhim.moTa);
// console.log('thông tin phim', layThongTinPhim());


// // OBJECT LITERALS
// let maKhoaHoc = 'FE31';
// let tenKhoaHoc = 'Lập trình FrontEnd 31';
// let layThongTinKhoaHoc = function(){
//     console.log('Khóa học frondend 31');
// };
// // let thongTinKhoaHoc = {
// //     maKhoaHoc,
// //     tenKhoaHoc,
// //     layThongTinKhoaHoc: () => {
// //         console.log('Khóa học frondend 31');
// //     }
// // }

// let propMaKH = 'maKhoaHocdiu';

// let thongTinKhoaHoc = {
//     [propMaKH]:maKhoaHoc,
//     tenKhoaHoc,
//     layThongTinKhoaHoc: () => {
//         console.log('Khóa học frondend 31');
//     }
// }

// console.log(thongTinKhoaHoc);
// thongTinKhoaHoc.layThongTinKhoaHoc();


// VÒNG LẶP FOR IN, FOR OF
// var mangSanPham = [
//     {maSP: 1, tenSP: 'Sony XZ Premium', gia: 1000},
//     {maSP: 2, tenSP: 'Google pixel XL', gia: 1500},
//     {maSP: 3, tenSP: 'Iphone 11 pro max', gia: 2000},
// ];

// var mangSanPhamOb = {
//     dt1:{maSP: 1, tenSP: 'Sony XZ Premium', gia: 1000},
//     dt2:{maSP: 2, tenSP: 'Google pixel XL', gia: 1500},
//     dt3:{maSP: 3, tenSP: 'Iphone 11 pro max', gia: 2000},
// };

// // ES5
// // for (var i = 0; i < mangSanPham.length; i++){
// //     console.log(mangSanPham[i]);
// // }

// // ES6 FOR IN duyệt index   Thường dùng để duyệt phần tử mảng dưới dạng object
// // for (var i in mangSanPham){
// //     console.log(mangSanPham[i]);
// // }
// for (var propName in mangSanPhamOb){
//     console.log(mangSanPhamOb[propName]);
// }

// ES6 FOR OF duyệt phần tử của mảng
// for (var sp of mangSanPham){
//     console.log(sp);
// }

// IMPORT & EXPORT
// Phải export class SanPham trong file SanPham.js
// Phải đổi script index trong html thêm type = 'module'
// import {SanPham} from './Models/SanPham';

// import {SanPham} from './Models/SanPham.js';

// let sanPham = new SanPham();

// sanPham.maSP = 1;
// sanPham.tenSP = 'IPHONE';
// console.log(sanPham);

// import {SanPham} from './Models/SanPham.js';
// import {LapTop} from './Models/SanPhamLapTop.js';

// let lapTop = new LapTop();
// lapTop.maSP = 'lt01';
// lapTop.tenSP = 'Laptop dell xps 9370';
// lapTop.layThongTinSanPham();


// HÀM XỬ LÝ ARRAY
let mangSanPham = [
    {MaSP:1, TenSP:'Sony Xperia XZ2', Gia: 17500000, HangSX:'SONY'},
    {MaSP:2, TenSP:'Sony Xperia XZ1', Gia: 15500000, HangSX:'SONY'},
    {MaSP:3, TenSP:'Sony Xperia XZPremium', Gia: 18500000, HangSX:'SONY'},
    {MaSP:4, TenSP:'Google Pixel XL', Gia: 27500000, HangSX:'GOOGLE'},
    {MaSP:5, TenSP:'Google Pixel 2', Gia: 17500000, HangSX:'GOOGLE'},
    {MaSP:6, TenSP:'Samsung Galaxy Note 9', Gia: 17500000, HangSX:'SAMSUNG'},
    {MaSP:7, TenSP:'Samsung Galaxy S10 Plus', Gia: 27500000, HangSX:'SAMSUNG'},
    {MaSP:8, TenSP:'Samsung Galaxy S10 5G', Gia: 37500000, HangSX:'SAMSUNG'},
];

// Yêu cầu lấy ra danh sách sản phẩm có HangSX = SONY
// ES5
let mangDTSony = [];
for (var i = 0; i < mangSanPham.length; i++){
    let dt = mangSanPham[i];
    if(dt.HangSX === 'SONY'){
        mangDTSony.push(dt);
    }
}
console.log(mangDTSony);

// ES6 dùng filter  kết quả hàm filter sẽ trả về 1 mảng thỏa điều kiện arrow function
let mangDTSonyES6 = mangSanPham.filter(dt => dt.HangSX === 'SONY');
console.log(mangDTSonyES6);

// lấy danh sách các điện thoại có giá lớn hơn 20 triệu
let mangDTGia20 = mangSanPham.filter(dt => dt.Gia > 20000000);
console.log(mangDTGia20);

// find() tìm điện thoại có mã sp = 5
var dienThoai = mangSanPham.find(dt => dt.MaSP === 5);
console.log(dienThoai);

// findIndex() trả ra chỉ số phần tử đầu tiên tìm thấy nếu không tìm thấy trả về -1
var idienThoai = mangSanPham.findIndex(dt => dt.MaSP === 5);
console.log(idienThoai);

// forEach()    thực hiện công việc n lần
mangSanPham.forEach((dt,index) =>{
    // Tương tự for in, for of, for
    console.log(dt);
});

// map()    tương tự forEach trả ra 1 mảng các đối tượng mới
// ví dụ từ mang3DienThoai => tạo ra mảng html dienThoai

let mangHTMLDT = mangSanPham.map((dt,index) =>{
    return `<p>${dt.TenSP}</p>`;
});

console.log(mangHTMLDT);

// reduce((thamso1, thamso2, thamso3, thamso4))