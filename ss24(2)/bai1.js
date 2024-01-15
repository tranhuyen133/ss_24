var n = parseInt(prompt("Nhập số nguyên dương:"));
var binhPhuong = 1;
for (var i = 2; i <= n; i +=2) {
    binhPhuong = i * i;
    console.log(binhPhuong);
}
