let mode = document.querySelector("button");
let currmode = "light";
mode.addEventListener("click",() =>{
    if(currmode == "light"){
        currmode = "dark"
    }
    else{
        currmode = "light"
    }
    console.log(currmode)
});