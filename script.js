const choiceButtons = document.querySelectorAll(".btn");
const currentRoundDisplay = document.querySelector(".round-current");
const humanChoiceDisplay = document.querySelector(".human-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const roundResultDisplay = document.querySelector(".round-result");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameOverDisplay = document.querySelector(".game-over-el");
const restartButton = document.querySelector(".restart-game");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

let humanChoice;
let computerChoice;

restartButton.addEventListener("click", restartGame);

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentRound += 1;
    currentRoundDisplay.textContent = `Round: ${currentRound}`;
    humanChoice = button.textContent;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

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
  let userInput = prompt(
    "Pick your choice: Rock, Paper, or Scissors. (Open console to play)"
  );
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    roundResultDisplay.textContent = "It's a tie.";
    updateGameDisplays(humanChoice, computerChoice, humanScore, computerScore);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResultDisplay.textContent = "The winner is the human.";
    humanScore += 1;
    updateGameDisplays(humanChoice, computerChoice, humanScore, computerScore);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResultDisplay.textContent = "The winner is the human.";
    humanScore += 1;
    updateGameDisplays(humanChoice, computerChoice, humanScore, computerScore);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResultDisplay.textContent = "The winner is the human.";
    humanScore += 1;
    updateGameDisplays(humanChoice, computerChoice, humanScore, computerScore);
  } else {
    roundResultDisplay.textContent = "The winner is the computer.";
    computerScore += 1;
    updateGameDisplays(humanChoice, computerChoice, humanScore, computerScore);
  }

  if (currentRound === 5) {
    currentRoundDisplay.textContent = `Round: ${currentRound}`;

    if (humanScore > computerScore) {
      roundResultDisplay.innerHTML = `The winner of the 5 rounds is <span class="winner-text"> the human, with a score of ${humanScore},</span> while the computer scored ${computerScore}.`;
    } else if (humanScore < computerScore) {
      roundResultDisplay.innerHTML = `The winner of the 5 rounds is <span class="winner-text"> the computer, with a score of ${computerScore},</span> while the human scored ${humanScore}.`;
    } else {
      roundResultDisplay.innerHTML = `The match ended in a draw, with both the human and the computer <span class="winner-text">scoring ${humanScore}.</span>`;
    }

    choiceButtons.forEach((button) => {
      button.classList.add("disabled");
    });

    gameOverDisplay.setAttribute(
      "style",
      "display: block; font-size: 24px; color: #FFD700"
    );

    gameOverDisplay.textContent = "Game Over!";

    restartButton.style.display = "inline-block";
  }
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  currentRound = 0;

  currentRoundDisplay.textContent = "Round: 0";

  updateGameDisplays();

  choiceButtons.forEach((button) => {
    button.classList.remove("disabled");
  });

  gameOverDisplay.style.display = "none";

  roundResultDisplay.innerHTML = "";

  restartButton.style.display = "none";
}

function updateGameDisplays(
  humanChoice = "❓",
  computerChoice = "❓",
  humanScore = 0,
  computerScore = 0
) {
  humanChoiceDisplay.textContent = "Human Choice: " + humanChoice;
  computerChoiceDisplay.textContent = "Computer Choice: " + computerChoice;
  humanScoreDisplay.textContent = "Human Score: " + humanScore;
  computerScoreDisplay.textContent = "Computer Score: " + computerScore;
}
