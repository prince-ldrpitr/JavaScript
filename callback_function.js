function sum(a,b){
    console.log(a+b);

}

function calculate(a,b,callback){
    callback(a,b);
}

calculate(5,10,sum); // it will print 15

calculate(5,10,function(a,b){
    console.log(a*b);
});