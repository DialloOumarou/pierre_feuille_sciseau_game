const choices=["rock","paper","scisors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;



function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice===computerChoice){
        result="IT'S A TIE";
    }
    else if(playerChoice==="rock"){
        result=(computerChoice==="paper")?"YOU LOOSE":"YOU WIN";
    }
    else if(playerChoice==="paper"){
        result=(computerChoice==="scisors")?"YOU LOOSE":"YOU WIN";
    }
    else if(playerChoice==="scisors"){
        result=(computerChoice==="rock")?"YOU LOOSE":"YOU WIN";
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice}`;

    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;

    resultDisplay.textContent=`${result}!!`;

    resultDisplay.classList.remove("redColor","greenColor");

    if(result=='YOU LOOSE'){
        resultDisplay.classList.add("redColor");
        computerScore++;
    }
    else if(result=="YOU WIN"){
        resultDisplay.classList.add("greenColor");
        playerScore++;
    }

    playerScoreDisplay.textContent=`${playerScore}`;
    computerScoreDisplay.textContent=`${computerScore}`;
}

