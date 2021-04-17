// var txtInput = document.getElementById('txt');
// console.log(txtInput);

// var titleInput = document.getElementById('title');
// console.log(titleInput);
// titleInput.innerHTML = 'CYBERSOFT';

// var tagImg = document.getElementById('img');
// tagImg.src = 'https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg';

// Bai_1 set title dua tren input nguoi dung nhap vao
// B1 xay dung ham xu ly cho nut button #btnChangeTitle
// document.getElementById('btnChangeTitle').onclick = function(){
//     // B2 Sau khi nguoi dung click vao nut button 
//     // Lay thong tin nguoi dung
//     var title = document.getElementById('txt').value;
//     // Lay gia tri value do gan cho innerHTML cua the h3 #title
//     document.getElementById('title').innerHTML = title;
// }

// Bai_2: set button de bat va tat den
document.getElementById('btnBatDen').onclick = function(){
    // Lay thong tin file hinh theo duong dan di tu index.html
    var den = document.getElementById('buf');
    den.src = './img/pic_bulbon.gif';
    // Thay doi style cua nut bat den khi ngoui dung bam vao nut bat den
    // document.getElementById('btnBatDen').style.color = 'red';
    // document.getElementById('btnTatDen').style.color = 'black';
    // document.getElementById('btnBatDen').className = 'activeBtn';
    // document.getElementById('btnTatDen').className = 'notactiveBtn';

    // Ham thay doi gia tri attribute
    document.getElementById('btnBatDen').setAttribute('class', 'activeBtn');
    document.getElementById('btnTatDen').setAttribute('class', 'notActiveBtn');
    
}
document.getElementById('btnTatDen').onclick = function(){
    var den = document.getElementById('buf');
    den.src = './img/pic_bulboff.gif';
    // document.getElementById('btnBatDen').style.color = 'black';
    // document.getElementById('btnTatDen').style.color = 'red';
    document.getElementById('btnBatDen').className = 'notActiveBtn';
    document.getElementById('btnTatDen').className = 'activeBtn';
}

//Set style (CSS) cua 1 doi tuong html


//An 1 the di

// document.getElementById('btnNhan').onclick = function(){
//     var theP = document.getElementById('theP');
//     // theP.style.opacity = '0';
//     // theP.style.display = 'none';
//     theP.className = 'nhanNut';
// }

document.getElementById('btnNhan').addEventListener('click', function(){
    document.getElementById('theP').style.display = 'none';
})

document.getElementById('btnLamMo').onclick = function(){
    document.getElementById('text').setAttribute('class','opacity');
}

//Bai 5:
document.getElementById('btnThongBao').onclick = function(){
    var tKhoan = document.getElementById('taiKhoan').value;
    var mKhau = document.getElementById('matKhau').value;
    if (tKhoan === "CyberSoft" && mKhau === "CyberSoft"){
        document.getElementById('btnThongBao').style.backgroundColor = 'green';
        document.getElementById('thongBao').className = 'thanhCong';
        document.getElementById('thongBao').innerHTML = 'Dang nhap thanh cong';
    }
    else
    {
        document.getElementById('btnThongBao').style.backgroundColor = 'red';
        document.getElementById('thongBao').className = 'thatBai';
        document.getElementById('thongBao').innerHTML = 'Dang nhap that bai';
        document.getElementById('taiKhoan').focus();
    }
}

// Mang trong javascript

var arrNumber = [1,2,3,4,5];
var arrString = ['a','b','c'];
var objectHocVien = {
    maHV:1,
    hoTen:'Nguyen Van A',
    layThongTinHocVien: function(){
        console.log('Ma HV', this.maHV);
        console.log('Ten HV', this.hoTen);
    }
};

var objectHocVien2 = {
    maHV:2,
    hoTen:'Nguyen Van B',
    layThongTinHocVien: function(){
        console.log('Ma HV', this.maHV);
        console.log('Ten HV', this.hoTen);
    }
};

var arrHocVien = [objectHocVien,objectHocVien2];