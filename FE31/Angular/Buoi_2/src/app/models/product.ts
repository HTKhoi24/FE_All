export interface IProduct{
    MaSP:number;
    TenSP:string;
    Gia:number;
}

export class Product implements IProduct{
    MaSP:number;
    TenSP:string;
    Gia:number;
    constructor(maSP:number, tenSP:string, gia:number){
        this.MaSP = maSP;
        this.TenSP = tenSP;
        this.Gia = gia
    }
}