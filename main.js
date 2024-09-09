console.log("hello world");
const player1 = {
  name: "player1",
  color: "red",
  clickedBoxes: [].sort((a, b) => a - b),
};
const player2 = {
  name: "player2",
  color: "blue",
  clickedBoxes: [].sort((a, b) => a - b),
};
const sqaure1 = document.getElementById("square1");
const sqaure2 = document.getElementById("square2");
const sqaure3 = document.getElementById("square3");
const sqaure4 = document.getElementById("square4");
const sqaure5 = document.getElementById("square5");
const sqaure6 = document.getElementById("square6");
const sqaure7 = document.getElementById("square7");
const sqaure8 = document.getElementById("square8");
const sqaure9 = document.getElementById("square9");
const gameBoard = [
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9,
];
let numberOfTurn = 0;
const winningScenarios = [
  [sqaure1, sqaure2, sqaure3],
  [sqaure4, sqaure5, sqaure6],
  [sqaure7, sqaure8, sqaure9],
  [sqaure1, sqaure4, sqaure7],
  [sqaure2, sqaure5, sqaure8],
  [sqaure3, sqaure6, sqaure9],
  [sqaure1, sqaure5, sqaure9],
  [sqaure3, sqaure5, sqaure7],
];
let currentPlayer = player1;
const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", startGame);
const namePlayer1 = document.getElementById("namePlayer1");
const namePlayer2 = document.getElementById("namePlayer2");
/**
 * Check clicked square
 *
 * @param {*} square
 */
function checkClickedSquares(square) {
  sqaure.addEventListener("click", () => {
    if (square.checked) {
      sqaure.style.backgroundColor = currentPlayer.color;
      currentPlayer.clickedBoxes.push(square);
    } else {
      square.style.backgroundColor = "";
      currentPlayer.clickedBoxes.pop(square);
    }
    console.log(currentPlayer.clickedBoxes);
    console.log(square)
    playerTurn();
    numberOfTurn++;
    if (numberOfTurn >= 5) {
      checkWin();
    } else if (numberOfTurn === 9) {
      alert("It's a tie!");
    }
  });
}
/**
 * Check if player wins
 */
function checkWin() {
  for (let i = 0; i < winningScenarios.length; i++) {
    const winningScenario = winningScenarios[i];
    if ((winningScenario = currentPlayer.clickedBoxes)) {
      alert(`${currentPlayer.name} Wins!`);
    }
  }
}
/**
 * Start the Game
 */
function startGame() {
  console.log("Game Started!");
  startGameButton.style.display = "none";
  namePlayer1.style.display = "none";
  namePlayer2.style.display = "none";
  player1.name = namePlayer1.value;
  player2.name = namePlayer2.value;
  currentPlayer = player1;
  for (let i = 0; i < gameBoard.length; i++) {
    let square = gameBoard[i];
    checkClickedSquares(square);
  }
}
/**
 * Player Turn
 */
function playerTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}