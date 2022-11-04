function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let playerSelection = "";
let computerSelection = "";

let roundWinner = "";
let message = "";
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    message = "It's a tie!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundWinner = "player";
    playerScore++;
    message = `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    roundWinner = "computer";
    computerScore++;
    message = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, Scissors:").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(message);
  }
  if (playerScore > computerScore) {
    console.log("You have won the game!!! Congratulations! :D");
  } else if (playerScore < computerScore) {
    console.log("You have lost the game!!! :(((");
  } else {
    console.log("TIE !!!");
  }
}

game();
