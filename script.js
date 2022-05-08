

/* Play a single round of RPS 
computerPlay() will randomly return Rock Paper or Scissors and store it in a variable computerPick

Game() function will take computerPick and a player input via console. It will compare the two values computerPick and playerPick and return a string about who won.
    If computer picked rock
        If player picked paper, he wins
        If player picked rock, tie
        If player picked scissors, he loses
    
    If computer picked paper
        If player picked scissors, he wins
        If player picked paper, tie
        If player picked rock, he loses

    If computer picked scissors
        If player picked rock, he wins
        If player picked scissors, tie
        If player picked paper, he loses

    */


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