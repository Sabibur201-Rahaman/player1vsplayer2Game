const winScoreElm = document.querySelector(".lucky-number span");
const p1ScoreElm = document.querySelector(".p1");
const p2ScoreElm = document.querySelector(".p2");
const inputElm = document.querySelector("#luck-input");
const resetBtn = document.querySelector("#resetbtn");
const p1btnElm = document.querySelector(".p1btn");
const p2btnElm = document.querySelector(".p2btn");
const winerElm = document.querySelector(".winner");
const formElm = document.querySelector("form");

// initial value

let wining;
let p1Score;
let p2Score;
let p1Turn;
let p2Turn;
let isGameOver = false;

function initialValues() {
  wining = 0;
  p1Score = 0;
  p2Score = 0;
  p1Turn = 0;
  p2Turn = 0;
  isGameOver = false;
}
initialValues();

function resetInput() {
  inputElm.value = "";
}

function inputedValueValid(inputVal) {
  let isValid = false;
  if (!inputVal || inputVal != inputVal) {
    alert("input valid value");
    isValid = true;
  }
  return isValid;
}
function playerBtnDisable() {
  p1btnElm.setAttribute("disabled", "disabled");
  p2btnElm.setAttribute("disabled", "disabled");
}
formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputVal = Number(inputElm.value);
  const validOr = inputedValueValid(inputVal);
  resetInput();
  wining = inputVal;
  //   wining = inputVal;
  winScoreElm.innerHTML = inputVal;
});

p1btnElm.addEventListener("click", (evt) => {
  if (p1Turn && !isGameOver) {
    p1Score++;

    p1ScoreElm.textContent = p1Score;
  }
  p1Turn = false;
  p1btnElm.setAttribute("disabled", "disabled");
  p2Turn = true;
  p2btnElm.removeAttribute("disabled");
  if (p1Score === wining) {
    isGameOver = true;
    playerBtnDisable();
    winerElm.textContent = "player1 is winner";
  }
});

p2btnElm.addEventListener("click", (evt) => {
  if (p2Turn && !isGameOver) {
    p2Score++;
    p2ScoreElm.textContent = p2Score;
  }
  p2Turn = false;
  p2btnElm.setAttribute("disabled", "disabled");
  p1Turn = true;
  p1btnElm.removeAttribute("disabled");
  if (p2Score === wining) {
    isGameOver = true;
    playerBtnDisable();
    winerElm.textContent = "player2 is winer";
  }
});
resetBtn.addEventListener("click", (evt) => {
  initialValues();
});
