let cells = document.querySelectorAll(`.cells`);
let x = 0;
let endResult = 0;
let winr = ``;
cells.forEach(function(cells) {
  cells.addEventListener(`click`, cellClicked);
});

const play1 = `X`;
const play2 = `O`;
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
];

function cellClicked(e) {
  if (e.target.textContent == 0) {
    if (x % 2 == 0) {
	  e.target.textContent = play1;
	  var snd = new Audio("SwordsClashing.mp3"); // buffers automatically when created
	snd.play();
    } else {
	  e.target.textContent = play2;
	  var snd = new Audio("ArrowsFlying.mp3"); // buffers automatically when created
	snd.play();
    }
	x++;
	
  }

  let win = checkWin();
  let draw = checkDraw();

  if (win[0] == true) {
    alert(`${win[1]} Winner`);
  } else if (draw == "tater") {
    alert(`Draw`);
  }
}

function checkWin() {
  for (let i = 0; i < winCombo.length; i++) {
	let combo = winCombo[i];
    let sum = 0;
    for (let j = 0; j < combo.length; j++) {
      if (cells[combo[j]].textContent === play1) {
		sum++;
		
      }

      if (sum === 3) {
        endResult = true;
        winr = play1;
      }
    }
  }

  for (let l = 0; l < winCombo.length; l++) {
    let combo = winCombo[l];
    let sum = 0;
    for (let k = 0; k < combo.length; k++) {
      if (cells[combo[k]].textContent === play2) {
        sum++;
      }

      if (sum === 3) {
        endResult = true;
        winr = play2;
      }
    }
  }
  return [endResult, winr];
}

function checkDraw() {
  if (x == 9) {
    endResult = "tater";
  } else { 
    endResult = 0;
  }
  return endResult;
}

let btn = document.querySelector(`button`);

btn.addEventListener(`click`, function() {
  x = 0;
  endResult = 0;
  for (let j = 0; j < 9; j++) {
    cells[j].textContent = ``;
  }
  sum = 0;
});

