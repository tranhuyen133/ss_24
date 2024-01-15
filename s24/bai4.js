var n = parseInt(prompt("Nhập số nguyên dương"));
var S = 0;
var P = 1;
if(n<1){
      console.log();
}while(n<1);
for(var i =1; i<=n;i++){
    P=P*i;
    S=S+P;
}
console.log(S);