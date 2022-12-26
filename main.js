let board__cells = document.querySelectorAll(".board__cell");
let game__turns = document.querySelector(".game__turn");
let reset__button = document.querySelector(".button");

board__cells = Array.from(board__cells);
let firstPlayer = "X";

let winning__value = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function resetScore(time) {
  setTimeout(function () {
    window.location.reload();
  }, time);
}

function checkForWinner() {
  winning__value.forEach(function (combination) {
    let check = combination.every(
      (idx) => board__cells[idx].innerText.trim() === firstPlayer
    );
    if (check) {
      game__turns.innerText = `${firstPlayer} has won the game.
      Starting a new Game!`;
      resetScore(2000);
    }
  });
}

board__cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() !== "") {
      return;
    }
    cell.innerText = firstPlayer;

    checkForWinner();

    firstPlayer = firstPlayer === "X" ? "O" : "X";
  });
});

reset__button.addEventListener("click", () => {
  game__turns.innerText = "Restarting the new game..... ";
  resetScore(1000);
});
