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

let computerPick = computerPlay();
let playerPick = "pApER";

function playRound(computerPick, playerPick) {
    computerPick = computerPick.toLowerCase();
    playerPick = playerPick.toLowerCase();

    if (computerPick === "rock") {
        if (playerPick === "paper") {
            return "Paper beats Rock. You win!!!";
        } else if (playerPick === "rock") {
            return "Rock and Rock -- You tie. Play again!";
        } else {
            return "Rock beats Scissors. You lose ...";
        }
    }

    if (computerPick === "paper") {
        if (playerPick === "scissors") {
            return "Scissors beats paper. You win!!!";
        } else if (playerPick === "paper") {
            return "Paper and Paper -- You tie. Play again!";
        } else {
            return "Paper beats Rock. You lose ...";
        }
    }

    if (computerPick === "scissors") {
        if (playerPick === "rock") {
            return "Rock beats Scissors. You win!!!";
        } else if (playerPick === "scissors") {
            return "Scissors and Scissors -- You tie. Play again!";
        } else {
            return "Scissors beat Paper. You lose ...";
        }
    }
}

console.log(playRound(computerPick, playerPick));

// game() will run playRound() 5 times
// it will get a new computerPick each time with computerPlay()
// it will get a new playerPick each time with prompt();
// it will use a return value from playRound to tally computer and player total wins and losses
// it will also console log the result of each match
// it will call winner() at the end of 5 games to declare an overall winner

// winner() will compare computerWins and playerWins and console log a message 