var n = parseInt(prompt("Nhập một số nguyên dương: "));
var tong = 0;
var dem = 0;
for (var i = 2; tong + i * i <= n; i += 2) {
    var binhPhuong = i * i;
    tong += binhPhuong;
    dem++;
}
console.log(dem,n);