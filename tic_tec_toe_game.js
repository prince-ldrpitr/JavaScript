let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn_o = true;

const resetgame = () =>{
    turn_o = true;
    insablebtn();
    msg_container.classList.add("hide");

}

let winpattren = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {
    box.addEventListener("click",() => {
    if(turn_o){
        box.innerText = "o";
        turn_o = false;
    }
    else{
        box.innerText = "x";
        turn_o = true;

    }
    box.disabled = true;
    check_winner();
    })
 
});

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const insablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner = (winner) =>{
    msg.innerText = `congrectulation! winner is  ${winner}`;
    msg_container.classList.remove("hide");
    disablebtn();
}

const check_winner = () =>{
    for(let pattern of winpattren){
       // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1  != "" && pos2  != "" && pos3  != "" ){
        if(pos1 == pos2 && pos2==pos3){
            console.log("winner",pos1);
            showwinner(pos1);
        }

    }
    }
  
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);