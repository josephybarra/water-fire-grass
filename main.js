const choices = ["water", "fire", "grass"];
let winners = [];

function resetGame() {
  winners = [];
  document.querySelector(".winner").textContent = "";
  document.querySelector(".player-score").textContent = "0";
  document.querySelector(".computer-score").textContent = "0";
  document.querySelector(".tie-score").textContent = "0";
  document.querySelector(".reset").textContent = "Reset";
}

function startGame() {
  let types = document.querySelectorAll(".type");
  types.forEach((type) =>
    type.addEventListener("click", () => {
      if (type.id) {
        console.log("clicked");
        playRound(type.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);

  winners.push(winner);

  updateScore();

  wins = checkWins();

  if (wins == 5) {
    // display end results
    // change button to visible
    // change text to disply winner
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "You win!";
  } else {
    document.querySelector(".winner").textContent = "You lose.";
  }
}

function updateScore() {
  const pWins = winners.filter((item) => item == "Player").length;
  const cWins = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".player-score").textContent = `${pWins}`;
  document.querySelector(".tie-score").textContent = `${ties}`;
  document.querySelector(".computer-score").textContent = `${cWins}`;
}

function computerSelect() {
  // update the DOM with computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

function checkWins() {
  const pWins = winners.filter((item) => item == "Player").length;
  const cWins = winners.filter((item) => item == "Computer").length;
  return Math.max(pWins, cWins);
}

function checkWinner(pChoice, cChoice) {
  if (
    (pChoice === "water" && cChoice == "fire") ||
    (pChoice === "fire" && cChoice == "grass") ||
    (pChoice === "grass" && cChoice == "water")
  ) {
    return "Player";
  } else if (pChoice == cChoice) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWins = winners.filter((item) => item == "Player").length;
  const cWins = winners.filter((item) => item == "Computer").length;
  const ties = winner.filter((item) => item == "Tie").length;
}

startGame();
