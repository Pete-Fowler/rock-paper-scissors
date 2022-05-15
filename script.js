// see comments below

function computerPlay() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i == 1) {
        return "Rock";
    } else if (i == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// let computerPick = "";
// let playerPick = "";
let computerWins = 0;
let playerWins = 0;

function playRound(computerPick, playerPick) {
    computerPick = computerPick.toLowerCase();
    playerPick = playerPick.toLowerCase();

    if (computerPick === "rock") {
        if (playerPick === "paper") {
            playerWins++;
            return "Paper beats Rock. You win!!!";
        } else if (playerPick === "rock") {
            return "Rock and Rock -- You tie. Play again!";
        } else {
            computerWins++;
            return "Rock beats Scissors. You lose ...";
        }
    }

    if (computerPick === "paper") {
        if (playerPick === "scissors") {
            playerWins++;
            return "Scissors beats paper. You win!!!";
        } else if (playerPick === "paper") {
            return "Paper and Paper -- You tie. Play again!";
        } else {
            computerWins++;
            return "Paper beats Rock. You lose ...";
        }
    }

    if (computerPick === "scissors") {
        if (playerPick === "rock") {
            playerWins++;
            return "Rock beats Scissors. You win!!!";
        } else if (playerPick === "scissors") {
            return "Scissors and Scissors -- You tie. Play again!";
        } else {
            computerWins++;
            return "Scissors beat Paper. You lose ...";
        }
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', playRound(computerPlay(), "Rock"));

function game() {
    for (let i = 1; i <=5; i++) {
        console.log(playRound(computerPlay(), prompt("Rock, Paper, or Scissors?")));
    }
    winner(computerWins, playerWins);
}

function winner(computerWins, playerWins) {
    if (computerWins > playerWins) {
        console.log("You lose by " + computerWins + " to " + playerWins + ". The computer is far superior.");
    } else if (playerWins > computerWins) {
        console.log("You win by " + playerWins + " to " + computerWins + ". You are the superior being!");
    } else if (computerWins == playerWins) {
        console.log("It was a tie!!!");
    }
}
// game();