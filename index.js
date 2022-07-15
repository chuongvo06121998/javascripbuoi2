//bai 1
document.getElementById("btnTinhLuong").onclick = function() {
    var soNgayLam = document .getElementById("soNgayLam").value*1 ;
    var luongNgay = document.getElementById("luongMotNgay").value ;
    var total = soNgayLam * luongNgay ;
    var format = new Intl.NumberFormat("vn-VN");
    var totalVND = format.format(total) + " vnd ";
    document.getElementById("thongBao").innerHTML = totalVND;
}
// bai 2
document.getElementById("btnTinhTrungBinh").onclick = function() {
    var tesr1 = document .getElementById("soThuOne").value*1;
    var tesr2 = document .getElementById("soThuTwo").value*1;
    var tesr3 = document .getElementById("soThuTre").value*1;
    var tesr4 = document .getElementById("soThuFor").value*1;
    var tesr5 = document .getElementById("soThu5Fir").value*1;
    var tongTB = (tesr1 + tesr2 +tesr3 +tesr4 +tesr5) / 5;
    document.getElementById("thongBaoKetQua").innerHTML = tongTB; 
}//bai 3
document.getElementById("btnTienQuyDoi").onclick = function() {
        var poliMer = document .getElementById("soTienViet").value;
        var soTienDoi = (poliMer * 235000) ;
        var format = new Intl.NumberFormat("vn-VN");
    var tienTranges = format.format(soTienDoi) + " vnd ";
    document.getElementById("thongTienDuocNhan").innerHTML = tienTranges;
}
//bai 4
document.getElementById("btnDienTich").onclick = function(){
    var chuVi = document.getElementById("chuVi").value*1;
    var dienTich = document.getElementById("dienTich").value*1;
    var tong = chuVi * dienTich
    var nhan = (chuVi + dienTich) * 2;
    var ketQua = '';
    ketQua += "<p> Dien tich:" + tong + "</p>"
    // ketQua += "<p>" +tong + "</p>";
    ketQua += "<p>Chu vi: "  + nhan +"</p>"
    // ketQua += "<p>" +nhan + "</p>";
    document.getElementById("thongDienTich").innerHTML = ketQua;

} //bai 5
document.getElementById("btnTinhTong").onclick = function(){
    var soThuc =  document.getElementById("tongSoThuc").value*1;
    var num1 = soThuc % 10;
    var num2 = Math.floor (soThuc / 10 );
   var totalSo = num1 + num2 ;
   document.getElementById("thongTinhTong").innerHTML = totalSo;
}

