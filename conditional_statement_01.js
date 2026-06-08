/*
let mode = "dark";
let color;

if(mode == "dark"){
    color = "black";
}

if(mode == "light"){
    color = "white";
}

console.log(color);
*/

let mode = "dark";
let color;
if(mode == "dark"){
    color = "black";
}
else{
    color = "white"
}
console.log(color)


let num = prompt("enter the number : ");
if(num%5==0){
    console.log("the number divisible by 5");
}
else{
    console.log("the number is not divisible by 5");
}