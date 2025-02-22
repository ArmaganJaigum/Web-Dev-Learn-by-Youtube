let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);  // by takinga any random nuumber
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was Draw.") //for backand or console Window
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31"

};

const shoWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!"); //for backand or console Window
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose!"); //for backand or console Window
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice); // fow backend or console
    // Generte computer choice
    const compChoice = genCompChoice();
    // console.log("Computer Choice", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin,userChoice, compChoice);
    };
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});