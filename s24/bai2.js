var a = parseInt(prompt("Nhập a"));
var b = parseInt(prompt("Nhập b"));
sum1=0;
sum2=0;
if(a<b){
    for(var i = a ;i<b;i++){
        if(i%2==0){
            sum1=sum1+i
        }else{
            sum2=sum2+i
        }
    }  
    console.log(sum1);
    console.log(sum2);
}
else{
    for(var i =b;i<a;i++){
        if(i%2==0){
            sum1=sum1+i
        }else{
            sum2=sum2+i
        }    
    }
        console.log(sum1);
        console.log(sum2);
}
    
    