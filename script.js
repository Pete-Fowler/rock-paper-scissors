

/* Play a single round of RPS 
computerPlay() will randomly return Rock Paper or Scissors and store it in a variable computerPick

The player will input a value stored in variable playerPick.

compare() will compare the two values computerPick and playerPick and return a string about who won
    paper beats rock
    rock beats scissors
    scissors beats paper

    */

let computerPick = "";

function computerPlay() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i == 1) {
        computerPick = "Rock";
    } else if (i == 2) {
        computerPick = "Paper";
    } else {
        computerPick = "Scissors";
    }
}

computerPlay();
console.log(computerPick);



