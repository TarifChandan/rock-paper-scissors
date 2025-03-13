let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

playGame();

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
  let userInput = prompt("Pick your choice: Rock, Paper, or Scissors.");
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
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log("It's a draw");
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }
}

function rockBeatsScissors(choiceHuman, choiceComputer) {
  if (choiceHuman === "rock") {
    humanScore += 1;
    return "The winner is the human.";
  } else if (choiceComputer === "rock") {
    computerScore += 1;
    return "The winner is the computer.";
  }
}

function paperBeatsRock(choiceHuman, choiceComputer) {
  if (choiceHuman === "paper") {
    humanScore += 1;
    return "The winner is the human.";
  } else if (choiceComputer === "paper") {
    computerScore += 1;
    return "The winner is the computer.";
  }
}

function scissorsBeatsRock(choiceHuman, choiceComputer) {
  if (choiceHuman === "scissors") {
    humanScore += 1;
    return "The winner is the human.";
  } else if (choiceComputer === "scissors") {
    computerScore += 1;
    return "The winner is the computer.";
  }
}

function playGame() {
  // Round 1
  console.log(" *ROUND 1!* ");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  // Round 2
  console.log(" *ROUND 2!* ");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  // Round 3
  console.log(" *ROUND 3!* ");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  // Round 4
  console.log(" *ROUND 4!* ");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  // Round 5
  console.log(" *ROUND 5!* ");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  // Announcement of the Ultimate Winner!
  console.clear();
  console.log(" *ULTIMATE WINNER!* ");
  if (humanScore > computerScore) {
    console.log(
      `The winner of the 5 rounds is the human, with a score of ${humanScore}, while the computer scored ${computerScore}.`
    );
  } else {
    console.log(
      `The winner of the 5 rounds is the computer, with a score of ${computerScore}, while the human scored ${humanScore}.`
    );
  }
}
