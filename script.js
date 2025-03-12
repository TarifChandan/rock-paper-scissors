function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    console.log("Rock");
  } else if (randomNumber === 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

getComputerChoice();
