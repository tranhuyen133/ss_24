var n =parseInt(prompt("Nhập n sô dương:"));
var m = 0;
var sum = 0 ;
for (var i = 1 ;i<n ; i++){
    sum = sum +i ;
    if(i>=n){
        break;
    }
    m = m + 1;
}
    console.log(m);