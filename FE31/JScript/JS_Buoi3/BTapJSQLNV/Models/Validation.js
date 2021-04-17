// Tạo 1 prototype riêng dành cho việc kiểm tra tính hợp lệ đầu vào
function Validation(){
    // Tạo phương thức kiểm tra rỗng
    this.kiemTraRong = function (value){
        // trim(): là phương thức loại bỏ khoảng trống đầu cuối của chuỗi
        if(value.trim() === ''){
            return true;
        }
        return false;
    }
    this.kiemTraSo = function(value){
        var regexNumber = /^\d+$/;  // Định dạng dự liệu cần test ( có thể search trên google với keyword : regex  javascript)
        //value.match(): kiểm tra value so với định dạng
        if(value.trim().match(regexNumber)){
            return true;
        }
        return false;
    }
    this.kiemTraEmail = function(value){
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // Định dạng dự liệu cần test ( có thể search trên google với keyword : regex  javascript)
        //value.match(): kiểm tra value so với định dạng
        if(value.trim().match(regexEmail)){
            return true;
        }
        return false;
    }
    this.kiemTraDoDai = function (value,minLength,maxLength){
        if(value.length > maxLength || value.length < minLength){
            return false;
        }
        return true;
    }
    this.kiemTraGiaTri = function(value,min,max){
        if(value > max || value < min){
            return false;
        }
        return true;
    }
}