const state = new Array(9).fill(null);
const tds = document.querySelectorAll("td");
const button_1 = document.querySelector("p1btn");
const button_2 = document.querySelector("p2btn");
const message_Display = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
let playler_1 = true;
let gameNotOver = true;

const getClickHandler = (id) => () => {
  if (gameNotOver) {
    if (!state[id]) {
      if (playler_1) {
        state[id] = CROSS;
        check_winner(id);
        tds[id].innerText = CROSS;
        p1btn.classList.remove("selected");
        tds[id].classList.add("display");
        p2btn.classList.add("selected");
      }

      else {
        state[id] = ZERO;
        check_winner(id);
        tds[id].innerText = ZERO;
        tds[id].classList.add("display");
        p2btn.classList.remove("selected");
        p1btn.classList.add("selected");
      }
    }
    playler_1 = !playler_1;
  }
}

resetButton.addEventListener("click", function () {
  tds.forEach(
    (tds) => {
      tds.classList.remove("display");
      tds.innerText = ""
    }
  )
  playler_1 = true;
  gameNotOver = true;
  matchWon = false;
  state.fill(null);
  p2btn.classList.remove("selected");
  p1btn.classList.add("selected");
  message_Display.textContent = TIC_TAC_TOE;
});

function check_winner(id) {
  let matchWon = false;
  for (const index in WINNING_CONDITIONS) {
    const win_condition = WINNING_CONDITIONS[index];
    if (!state[win_condition[0]] || !state[win_condition[0]] || !state[win_condition[0]]) {
      continue;//falsy
    }

    if (state[win_condition[0]] === state[win_condition[1]] && state[win_condition[1]] === state[win_condition[2]]) {
      matchWon = true;
      break;
    }
  }
  if (matchWon) {
    gameNotOver = false;
    state[id] === "X" ? message_Display.textContent = PLAYER_1 : message_Display.textContent = PLAYER_2;
  }

  let matchDraw = !state.includes(null);
  if (matchDraw) {
    message_Display.textContent = DRAW;
    gameNotOver=false;
     
  }
}

