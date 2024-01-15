var n = parseInt(prompt("Nhập một số nguyên dương"));
var j = 0 ;
for(var i = 1;i<=n;i++){
    var j =j+i;
}
if(j%2==0){
    j--;
    console.log(j);
}else{
    console.log(j);
}