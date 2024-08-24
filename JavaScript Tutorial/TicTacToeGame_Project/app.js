let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX, player0

const winPttern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) { //player 0 
            box.innerText = "0";
            turn0 = false;
        } else { // player x 
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulaions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {    // after one winner is came then automaticlly disable 
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const resetGame = () => {
    turn0 = true;
    enableableBoxes();
    msgContainer.classList.add("hide");
};

const checkWinner = () => {
    for (let pattern of winPttern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            };
        };
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);