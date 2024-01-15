var n = parseInt(prompt("Nhập n:"));
var dem = 0;
var gan = 0;
do {
    console.log();
        
if(n==0){
    dem = 1 ;
}
gan = n;
}while(gan!=0)
{
    if(gan%2==0){
        dem = dem + 1;
    }
    gan = gan / 10;
}
 console.log(gan,dem);

 



 