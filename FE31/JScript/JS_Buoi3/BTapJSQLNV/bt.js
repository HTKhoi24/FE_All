// document.getElementById('btnHienThi').onclick = function(){
//     // Lấy ra nội dung thẻ option được chọn
//     var slChucVu = document.getElementById('chucVu');
//     //Tìm ra thẻ option chứa thuộc tính selected
//     var tenChucVu = slChucVu.options[slChucVu.selectedIndex].innerHTML;
//     var nhanVien = {
//         tenNV: document.getElementById('tenNV').value,
//         maNV: document.getElementById('maNV').value,
//         maChucVu: document.getElementById('chucVu').value,
//         tenChucVu: tenChucVu, // Lấy trường html cùa tag option
//         luongCB: Number(document.getElementById('luongCoBan').value),
//         gioLam: Number(document.getElementById('gioLam').value),
//         tongLuong: 0,
//         tinhTongLuong: function(){
//             if(this.maChucVu === "giamDoc")
//             {
//                 this.tongLuong = this.luongCB * 3;
//             }
//             else if(this.maChucVu === "truongPhong"){
//                 this.tongLuong = this.luongCB * 2;
//             }
//             else if(this.maChucVu === "nhanVien"){
//                 this.tongLuong = this.luongCB;
//             }
//             return this.tongLuong;
//         },
//         xepLoai: function(){
//             if (this.gioLam > 120){
//                 return 'Xuất Sắc';
//             }
//             else if(this.gioLam > 100){
//                 return 'Giỏi';
//             }
//             else if(this.gioLam > 80){
//                 return 'Khá';
//             }
//             else if(this.gioLam > 50){
//                 return 'Trung Bình';
//             }
//             else{
//                 return 'Đuổi';
//             }
//         }
//     };

//     document.getElementById('txtMaNV').innerHTML = nhanVien.maNV;
//     document.getElementById('txtTenNV').innerHTML = nhanVien.tenNV;
//     document.getElementById('txtChucVu').innerHTML = nhanVien.tenChucVu;
//     document.getElementById('txtTongLuong').innerHTML = nhanVien.tinhTongLuong();
//     document.getElementById('txtXepLoai').innerHTML = nhanVien.xepLoai();
    
//     // Tạo tag html => Hiển thị table
//     // phương thức createElement: là phương thức tạo ra 1 đối tượng là 1 tag html
//     var trNhanVien = document.createElement('tr');      // tr này chưa được gắn lên giao diện
//     var tdMaNV = document.createElement('td');
//     tdMaNV.innerHTML = nhanVien.maNV;
//     var tdTenNV = document.createElement('td');
//     tdTenNV.innerHTML = nhanVien.tenNV;
//     var tdChucVu = document.createElement('td');
//     tdChucVu.innerHTML = nhanVien.tenChucVu;
//     var tdTongLuong = document.createElement('td');
//     tdTongLuong.innerHTML = nhanVien.tinhTongLuong();
//     var tdXepLoai = document.createElement('td');
//     tdXepLoai.innerHTML = nhanVien.xepLoai();
//     var tdTacVu = document.createElement('td');
//     var btnXoa = document.createElement('button');
//     btnXoa.className = 'btn btn-danger';
//     btnXoa.innerHTML = 'Xóa';
//     btnXoa.onclick = function xoaNhanVien(){  // Định nghĩa sự kiện xóa
//         // Duyệt tất cả tr => tr nào chứa mã nhân viên => remove
//         var danhSachTR = document.getElementsByTagName('tr');
//         for (var i = 0; i < danhSachTR.length; i++){
//             // Lấy mã nhân viên từ tdMa trong tr so sánh với mã được click từ nút xóa
//             var maNVTD = danhSachTR[i].children[0].innerHTML;
//             if (maNVTD === nhanVien.maNV){
//                 danhSachTR[i].remove();     // hàm xóa phần tử tại phần tử tại vị trí đó của mảng
//             }
//         }
//     };
//     tdTacVu.append(btnXoa);

//     // Gắn các thẻ td vào tr = phương thức append của tr
//     trNhanVien.append(tdMaNV);
//     trNhanVien.append(tdTenNV);
//     trNhanVien.append(tdChucVu);
//     trNhanVien.append(tdTongLuong);
//     trNhanVien.append(tdXepLoai);
//     trNhanVien.append(tdTacVu);
//     // Gắn thẻ tr đó vào tBody trên giao diện
//     document.getElementById('tblDanhSachNhanVien').append(trNhanVien);

//     // Các chức năng nên có 
//     // thêm data: Create 
//     // Hiển thị: Read 
//     // Cập nhật: Update 
//     // Xóa :Delete
//     // CRUD
// }


// OOP

var mangNhanVien = [];

// Gọi lấy storage load bảng nhân viên
layStorage();

// Đối tượng kiểm tra hợp lệ của input
var valid = new Validation();

document.getElementById('btnThemNhanVien').onclick = function(){
    var slChucVu = document.getElementById('chucVu');
//     //Tìm ra thẻ option chứa thuộc tính selected
    var tenChucVu = slChucVu.options[slChucVu.selectedIndex].innerHTML;
    // Tạo đối tượng nhân viên từ prototype NhanVien
    var nv = new NhanVien();
    // Lấy giá trị người dùng nhập vào gán vào thuộc tính của đối tượng nhanVien

    // if(document.getElementById('maNV').value === ''){
    //     // alert hiển thị hộp thoại thông báo của browser
    //     alert('Mã nhân viên không được bỏ trống');
    //     //return là không làm tiếp các bước sau
    //     return ;
    // }

    nv.maNV = document.getElementById('maNV').value;
    nv.tenNV = document.getElementById('tenNV').value;
    nv.email = document.getElementById('email').value;
    nv.luongCB = document.getElementById('luongCoBan').value;
    nv.soGioLam = document.getElementById('gioLam').value;
    nv.maChucVu = document.getElementById('chucVu').value;
    nv.tenChucVu = tenChucVu;

    var _valid = true;

    // Kiểm tra hợp lệ
    if(valid.kiemTraRong(nv.maNV) === true){
        //Trường hợp mã nhân viên bỏ trống
        document.getElementById('errorMaNV').innerHTML = 'Mã NV không được rỗng';
        _valid = false;
    }
    else{
        //Trường hợp mã nhân viên hợp lệ
        document.getElementById('errorMaNV').innerHTML = '';
    }
    if(valid.kiemTraRong(nv.tenNV) === true){
        //Trường hợp tên nhân viên bỏ trống
        document.getElementById('errorTenNV').innerHTML = 'Tên NV không được rỗng';
        _valid = false;
    }
    else{
        //Trường hợp tên nhân viên hợp lệ
        document.getElementById('errorTenNV').innerHTML = '';
    }
    if(valid.kiemTraRong(nv.email) === true){
        //Trường hợp email nhân viên bỏ trống
        document.getElementById('errorEmail').innerHTML = 'Email NV không được rỗng';
        _valid = false;
    }
    else{
        //Trường hợp email nhân viên hợp lệ
        document.getElementById('errorEmail').innerHTML = '';
    }
    if(valid.kiemTraRong(nv.luongCB) === true){
        //Trường hợp tên nhân viên bỏ trống
        document.getElementById('errorLCBan').innerHTML = 'Lương cơ bản không được rỗng';
        _valid = false;
    }
    else{
        //Trường hợp tên nhân viên hợp lệ
        document.getElementById('errorLCBan').innerHTML = '';
    }
    if(valid.kiemTraRong(nv.soGioLam) === true){
        //Trường hợp tên nhân viên bỏ trống
        document.getElementById('errorGioLam').innerHTML = 'Giờ làm việc không được rỗng';
        _valid = false;
    }
    else{
        //Trường hợp tên nhân viên hợp lệ
        document.getElementById('errorGioLam').innerHTML = '';
    }
    if(!_valid){ // Tương đương valid === false
        return;
    }

    // Kiểm tra email có hợp lệ
    if(!valid.kiemTraEmail(nv.email)){
        document.getElementById('errorEmail').innerHTML = 'Email NV không hợp lệ';
        _valid = false;
    }
    else{
        document.getElementById('errorEmail').innerHTML = '';
    }
    if(!_valid){ // Tương đương valid === false
        return;
    }

    // Kiểm tra lương căn bản và số giờ làm là số
    if(!valid.kiemTraSo(nv.luongCB)){
        document.getElementById('errorLCBan').innerHTML = 'Lương cơ bản phải là số';
        _valid = false;
    }
    else{
        document.getElementById('errorLCBan').innerHTML = '';
    }
    if(!valid.kiemTraSo(nv.soGioLam)){
        document.getElementById('errorGioLam').innerHTML = 'Số giờ làm phải là số';
        _valid = false;
    }
    else{
        document.getElementById('errorGioLam').innerHTML = '';
    }
    if(!_valid){ // Tương đương valid === false
        return;
    }

    // Kiểm tra độ dài mã nhân viên không quá 6 kí tự
    if(!valid.kiemTraDoDai(nv.maNV,0,6)){
        document.getElementById('errorMaNV').innerHTML = 'Số kí tự không hợp lệ';
        _valid = false;
    }
    else{
        document.getElementById('errorMaNV').innerHTML = '';
    }
    if(!_valid){ // Tương đương valid === false
        return;
    }

    // Kiểm tra lương cơ bản và số giờ làm
    if(!valid.kiemTraDoDai(nv.luongCB,7,9)){
        document.getElementById('errorLCBan').innerHTML = 'Hãy nhập số tiền thật';
        _valid = false;
    }
    else{
        document.getElementById('errorLCBan').innerHTML = '';
    }
    if(!valid.kiemTraGiaTri(nv.soGioLam,8,130)){
        document.getElementById('errorGioLam').innerHTML = 'Nói thật đi!';
        _valid = false;
    }
    else{
        document.getElementById('errorGioLam').innerHTML = '';
    }
    if(!_valid){ // Tương đương valid === false
        return;
    }

    // Thêm nhân viên đó vào mảng   push: phương thức thêm một phần tử vào mảng
    mangNhanVien.push(nv);
    console.log(mangNhanVien);
    // Gọi hàm lưu dữ liệu vào storage
    luuStorage();
    renderTable(mangNhanVien);
}

// Viết phương thức render table
function renderTable(mangNV){
    
    // Xóa innerhtml tbody vì cứ mỗi lần thêm mình sẽ tạo lại nội dung cho tbody
    document.getElementById('tblDanhSachNhanVien').innerHTML = '';
    var content = '';
    // Duyệt mangNV tạo lại nội dung tbody
    for (var i = 0; i < mangNV.length; i++){
        var nhanVien = mangNV[i];
        // content += '<tr>';
        // content += '<td>' + nhanVien.maNV + '</td>';
        // content += '<td>' + nhanVien.tenNV + '</td>';
        // content += '<td>' + nhanVien.tenChucVu + '</td>';
        // content += '<td>' + nhanVien.tinhLuong() + '</td>';
        // content += '<td>' + nhanVien.xepLoaiNhanVien() + '</td>';
        // content += '<td><button class = "btn btn-danger" onclick="deleteNV(' + nhanVien.maNV +')">Xóa</button></td>';
        // content += '</tr>';
        content += `
        <tr>
            <td>${nhanVien.maNV}</td>
            <td>${nhanVien.tenNV}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.tenChucVu}</td>
            <td>${nhanVien.tinhLuong()}</td>
            <td>${nhanVien.xepLoaiNhanVien()}</td>
            <td>
            <button class = "btn btn-success" onclick = "editNV('${nhanVien.maNV}')">Sửa</button>
            <button class = "btn btn-danger" onclick = "deleteNV('${nhanVien.maNV}')">Xóa</button></td>
        </tr>
        `;
    }

    // Lấy chuỗi html được tạo từ mảng nhân viên đưa vào nội dung của tbody
    document.getElementById('tblDanhSachNhanVien').innerHTML = content;
}

function deleteNV(maNV){
    // Thay vì dom đến tr tìm mã ( có mangNV)
    // Tìm trên mảng nhân viên nv nào có mã = nv được click => xóa nhân viên đó trong mảng => render lại table
    for(var i = 0; i < mangNhanVien.length; i++){
        var nhanVien = mangNhanVien[i];
        if(nhanVien.maNV == maNV){ // Nếu nhân viên trong mảng có mã = với mã của button cần xóa khi click
            mangNhanVien.splice(i,1);   // splice(index trong mảng, số lượng phần tử cần xóa);
        }
    }
    // Gọi lại hàm để tạo bảng
    renderTable(mangNhanVien);
}

// Sửa nhân viên => Load nhân viên được chọn sửa từ table lên form phía trên
function editNV(maNV){
    // Tìm trong mảng nhân viên có mã truyền vào => load lên form để người dùng edit
    for (var i = 0; i < mangNhanVien.length; i++){
        var nhanVien = mangNhanVien[i];
        if(nhanVien.maNV === maNV){
            // Lấy thông tin nhân viên tại đó load lên form
            document.getElementById('maNV').value = nhanVien.maNV;
            document.getElementById('tenNV').value = nhanVien.tenNV;
            document.getElementById('email').value = nhanVien.email;
            document.getElementById('luongCoBan').value = nhanVien.luongCB;
            document.getElementById('gioLam').value = nhanVien.soGioLam;
            document.getElementById('chucVu').value = nhanVien.maChucVu;
        }
    }
}

// Xây dựng chức năng cập nhật
document.getElementById('btnCapNhat').onclick = function(){
    var slChucVu = document.getElementById('chucVu');
//     //Tìm ra thẻ option chứa thuộc tính selected
    var tenChucVu = slChucVu.options[slChucVu.selectedIndex].innerHTML;
    // Lấy tất cả thông tin nhân viên từ form đưa vào đối tượng nhân viên
    var nvCapNhat = new NhanVien();
    // Lấy giá trị người dùng nhập vào gán vào thuộc tính của đối tượng nhanVien
    nvCapNhat.maNV = document.getElementById('maNV').value;
    nvCapNhat.tenNV = document.getElementById('tenNV').value;
    nvCapNhat.email = document.getElementById('email').value;
    nvCapNhat.luongCB = document.getElementById('luongCoBan').value;
    nvCapNhat.soGioLam = document.getElementById('gioLam').value;
    nvCapNhat.maChucVu = document.getElementById('chucVu').value;
    nvCapNhat.tenChucVu = tenChucVu;
    // Tìm trong mảng nhân viên nào có mã bằng nhân viên cập nhật
    for(var i = 0; i < mangNhanVien.length; i++){
        if(mangNhanVien[i].maNV === nvCapNhat.maNV){
            // Lấy nhân viên trong mảng gần bằng nhanVien sau khi người dùng thay đổi
            mangNhanVien[i] = nvCapNhat;
            renderTable(mangNhanVien);
        }
    }
}


// Viết hàm lưu trữ localeStorage

function luuStorage(){

    // lưu mảng nhân viên
    let sMangNhanVien = JSON.stringify(mangNhanVien);   // Chuyển mảng objct js => chuổi để lưu vào localestorage
    
    // lưu chuỗi đó vào storage
    localStorage.setItem('mangNhanVien', sMangNhanVien);
}

// Lấy dữ liệu từ storage sau mỗi lần reload hoặc mở trình duyệt web

function layStorage(){

    // Kiểm tra storage có rỗng không
    if(localStorage.getItem('mangNhanVien')){
        // Khi lấy từ storage data kiểu String
        var sMangNhanVien = localStorage.getItem('mangNhanVien');
        // Chuyển data về dạng đối tượng
        var mangNV = JSON.parse(sMangNhanVien);

        for(var i = 0; i < mangNV.length; i++){
            var nhanVien = new NhanVien();
            nhanVien.maNV = mangNV[i].maNV;
            nhanVien.tenNV = mangNV[i].tenNV;
            nhanVien.email = mangNV[i].email;
            nhanVien.luongCB = mangNV[i].luongCB;
            nhanVien.maChucVu = mangNV[i].maChucVu;
            nhanVien.tenChucVu = mangNV[i].tenChucVu;
            nhanVien.soGioLam = mangNV[i].soGioLam;
            // Mỗi lần lấy ra một đối tượng từ storage => tạo 1 nhân viên và push vào mangNV
            mangNhanVien.push(nhanVien);
        }

        // Gọi hàm render table => render ra mảng nhân viên
        renderTable(mangNhanVien);
    }
}