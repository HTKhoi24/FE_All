var GIATIEN_UBERX_1 = 8000;
var GIATIEN_UBERX_2 = 12000;
var GIATIEN_UBERX_3 = 10000;
var GIATIEN_UBERX_CHO = 2000;

var GIATIEN_UBERSUV_1 = 9000;
var GIATIEN_UBERSUV_2 = 14000;
var GIATIEN_UBERSUV_3 = 12000;
var GIATIEN_UBERSUV_CHO = 3000;

var GIATIEN_UBERBLACK_1 = 10000;
var GIATIEN_UBERBLACK_2 = 16000;
var GIATIEN_UBERBLACK_3 = 14000;
var GIATIEN_UBERBLACK_CHO = 4000;

function getElm(id){
    return document.getElementById(id);
}

function TinhTienTaxi(){
    // Lay loai xe
    var uberX = getElm("uberX");
    var uberSUV = getElm("uberSUV");
    var uberBlack = getElm("uberBlack");
    
    var loaiXe = "";
    if(uberX.checked){
        loaiXe = "uberX";
    }
    else if(uberSUV.checked){
        loaiXe = "uberSUV";
    }
    else if (uberBlack.checked){
        loaiXe = "uberBlack";
    }
    // Lay so KM
    var soKM = parseFloat(getElm("soKM").value);
    // Lay thoi gian cho
    var thoiGianCho = parseFloat(getElm("thoiGianCho").value);
    // Tinh tien
    var tongTien = 0;
    // if(loaiXe === "uberX"){
    //     // if(soKM <= 1){
    //     //     tongTien = 8000 + thoiGianCho * 2000;
    //     // }
    //     // else if(soKM > 1 && soKM <= 20){
    //     //     tongTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
    //     // }
    //     // else if (soKM > 20){
    //     //     tongTien = 8000 + 12000 * 19 + (soKm-20) * 10000 + thoiGianCho * 2000;
    //     // }
    //     tongTien = TinhTien(soKM,8000,12000,10000,2000,thoiGianCho);
    // }
    // else if(loaiXe === "uberSUV")
    // {
    //     tongTien = TinhTien(soKM,9000,14000,12000,3000,thoiGianCho);
    // }
    // else if (loaiXe === "uberBlack"){
    //     tongTien = TinhTien(soKM,10000,16000,14000,4000,thoiGianCho);
    // }
    // console.log(tongTien);

    switch(loaiXe){
        case "uberX":
            tongTien = TinhTien(soKM,GIATIEN_UBERX_1,GIATIEN_UBERX_2,GIATIEN_UBERX_3,GIATIEN_UBERX_CHO,thoiGianCho);
            break;
        case "uberSUV":
            tongTien = TinhTien(soKM,GIATIEN_UBERSUV_1,GIATIEN_UBERSUV_2,GIATIEN_UBERSUV_3,GIATIEN_UBERSUV_CHO,thoiGianCho);
            break;
        case "uberBlack":
            tongTien = TinhTien(soKM,GIATIEN_UBERBLACK_1,GIATIEN_UBERBLACK_2,GIATIEN_UBERBLACK_3,GIATIEN_UBERBLACK_CHO,thoiGianCho);
            break;
        default:
            break;
    }

    var divThanhTien = getElm("divThanhTien");
    divThanhTien.style.display = "block";
    divThanhTien.style.backgroundColor = "pink";

    var spanXuatTien = getElm("xuatTien");
    spanXuatTien.innerHTML = tongTien;
}

function TinhTien(soKM, giaTien1, giaTien2, giaTien3, giaTienCho, thoiGianCho){
    var tongTien = 0;
    if(soKM <= 1){
        tongTien = giaTien1+ thoiGianCho * giaTienCho;
    }
    else if (soKM > 1 && soKM <=20){
        tongTien = giaTien1 + (soKM - 1) * giaTien2 + thoiGianCho * giaTienCho;
    }
    else if (soKM > 20){
        tongTien = giaTien1 + 19 * giaTien2 + (soKM - 20) * giaTien3 + thoiGianCho * giaTienCho;
    }
    return tongTien;
}

// === là check kieu du lieu vs gia tri
// == là check gia tri