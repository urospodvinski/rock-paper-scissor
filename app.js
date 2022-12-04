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

let roundWinner = "";
let message = "";
let winner = "";
let playerScore = 0;
let computerScore = 0;
let score = "";

const buttons = document.querySelectorAll("button");
const roundWin = document.createElement("p");
const scoreBoard = document.createElement("p");
const gameWinner = document.createElement("p");
const resultContainer = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.id;
    computer = getComputerChoice();
    game();
    roundWin.textContent = message;
    scoreBoard.textContent = score;
    gameWinner.textContent = winner;
    resultContainer.appendChild(roundWin);
    resultContainer.appendChild(scoreBoard);
    resultContainer.appendChild(gameWinner);
  });
});

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
  score = `${playerScore} : ${computerScore}`;
}

function game() {
  playRound(player, computer);
  if (playerScore === 5) {
    winner = "You Won!";
  }
  if (computerScore === 5) {
    winner = "Computer Won :(";
  }
}
