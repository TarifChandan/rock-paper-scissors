let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

// FUNCTIONS
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Pick your choice: Rock, Paper, or Scissors?");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  let winner;
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    winner = rockBeatsScissors(humanChoice, computerChoice);
    console.log(winner);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    winner = paperBeatsRock(humanChoice, computerChoice);
    console.log(winner);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    winner = scissorsBeatsRock(humanChoice, computerChoice);
    console.log(winner);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  } else {
    console.log("It's a draw");
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }
}

function rockBeatsScissors(choiceHuman, choiceComputer) {
  if (choiceHuman === "rock") {
    humanScore += 1;
    return "The Winner is Human";
  } else if (choiceComputer === "rock") {
    computerScore += 1;
    return "The Winner is Computer";
  }
}

function paperBeatsRock(choiceHuman, choiceComputer) {
  if (choiceHuman === "paper") {
    humanScore += 1;
    return "The Winner is Human";
  } else if (choiceComputer === "paper") {
    computerScore += 1;
    return "The Winner is Computer";
  }
}

function scissorsBeatsRock(choiceHuman, choiceComputer) {
  if (choiceHuman === "scissors") {
    humanScore += 1;
    return "The Winner is Human";
  } else if (choiceComputer === "scissors") {
    computerScore += 1;
    return "The Winner is Computer";
  }
}
