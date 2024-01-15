var a = parseInt(prompt("Nhập một số nguyên dương a:"));
var b = parseInt(prompt("Nhập một số nguyên dương b:"));
var result = 1;
for (var i = 0; i < b; i++) {
    result *= a;
}
console.log(result);