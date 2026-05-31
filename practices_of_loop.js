/*for(let i=0;i<=100;i=i+2){
    console.log("i=",i);
}*/

let gamenum = 33;
let usernum = prompt("enter a number :");
while(usernum != gamenum){
    usernum=prompt("your number is wrong please gauss again :");
}
console.log("congratulation ! your number is correct.");