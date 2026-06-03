function sum(a,b){
    let c = a + b;
    console.log(c);
}


sum(3,33);


// 

function plus(x,y){ // function parameters is local variable of block od function
     let s = x + y ;
     return s;
}
let val = sum(3,3);
console.log(val);