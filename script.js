
// adds event listeners to buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => (playRound(computerPlay(), "Rock")));
paper.addEventListener('click', () => (playRound(computerPlay(), "Paper")));
scissors.addEventListener('click', () => (playRound(computerPlay(), "Scissors")));

// generates random computer pick
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

// made global for use in both winner() and playRound()
let computerWins = 0;
let playerWins = 0;
let rounds = 1;
const round = document.querySelector('.narrative-banner');
const score = document.querySelector('.score-banner');

// main function with game logic, displaying score & narrative
function playRound(computerPick, playerPick) {
    if (rounds < 5) {
        if ((playerPick === "Rock" && computerPick === "Scissors") || (playerPick 
        === "Paper" && computerPick === "Rock") || (playerPick === "Scissors" && 
        computerPick === "Paper")) {
            playerWins++;
            rounds++;
            round.textContent = `You win! ${playerPick} beats ${computerPick}!`;
        }

        if ((playerPick === 'Rock' && computerPick === 'Paper') || (playerPick === 
            'Paper' && computerPick === 'Scissors') || (playerPick === 'Scissors' 
            && computerPick === 'Rock')) {
                computerWins++;
                rounds++;
                round.textContent = `You lose! ${computerPick} beats ${playerPick}!`;
            }
        
        if ((playerPick === 'Rock' && computerPick === 'Rock') || (playerPick === 
            'Paper' && computerPick === 'Paper') || (playerPick === 'Scissors' && 
            computerPick === 'Scissors')) {
                rounds++;
                round.textContent = `It's a tie! ${playerPick} and ${computerPick} ...`;
            }
            score.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
    } else {
        winner(computerWins, playerWins);
    }
}

// picks a winner
function winner(cWins, pWins) {
    if (cWins > pWins) {
        score.textContent = `You lose by ${cWins} to ${pWins}. The 
        computer is far superior!`;
    } else if (pWins > cWins) {
        score.textContent = `You win by ${pWins} to ${cWins}. You 
        are the superior being!`;
    } else if (cWins == pWins) {
        score.textContent = `It was a ${pWins} to ${cWins} tie! Play again!`;
    }
    playerWins = 0;
    computerWins = 0;
    rounds = 1;
    }


