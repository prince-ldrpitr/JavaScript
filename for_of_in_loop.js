// for of loop array and function mate use thay

let str = "prince";

for(let i of str){
    console.log("i = ",i);
}


// for in loop object and array mate use thay

const student = {
    name : "prince",
    age  : 19,
    course : "information technolohy"
};
for(let key in student){
    console.log(key);
}