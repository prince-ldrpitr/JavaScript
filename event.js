let newbtn = document.createElement("button")
newbtn.innerText = "click me!";

let body = document.querySelector("body");
body.prepend(newbtn);


let btn = document.querySelector("#id");
/*
btn.ondblclick = () =>{
    console.log("click two times ");

};*/

btn.addEventListener("click",() => {
    console.log("btn is click");
});