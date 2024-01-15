var n = parseInt(prompt("Nhập một số nguyên dương: "));
var tong = 0;
if (n <= 0) {
    console.log();
}
for (var i = 1; i <= n; i++) {
    tong += 1 / (i * i * i);
}
console.log(tong);