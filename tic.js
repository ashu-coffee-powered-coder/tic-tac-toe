let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let container = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let newGame = document.querySelector('#new-game');
let turnO = true; // player x or o

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

function disableButtons() {
  for (box of boxes) {
    box.disabled = true;
  }
}

function enableButtons() {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const checkWinner = () => {
  for (patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winner(pos1Val);
        disableButtons();
      }
    }
  }
};

function winner(pos1val) {
  msg.innerText = `Congratulations, the winner is ${pos1val}`;
  container.classList.remove("hide");
}

const resetGame = () => {
  turnO = true;
  enableButtons();
  container.classList.add("hide");
};

resetbtn.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);