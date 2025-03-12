function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Pick your choice: Rock, Paper, or Scissors?");
  return userInput;
}
