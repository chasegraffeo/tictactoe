let cells = document.querySelectorAll(`.cells`)
let x = 0
cells.forEach(function (cells) {
	cells.addEventListener(`click`, cellClicked);
});

const play1 = `X`
const play2 = `O`
const winCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[0, 4, 8]
]

function cellClicked(e) {
	if (e.target.textContent == 0) {
		if (x % 2 == 0) {
			e.target.textContent = play1;
		} else {
			e.target.textContent = play2;
		}
		x++
	}

	checkWin();
	checkDraw()

}

function checkWin() {
	for (let i = 0; i < winCombo.length; i++) {
		let combo = winCombo[i];
		let sum = 0;
		for (let j = 0; j < combo.length; j++) {
			if (cells[combo[j]].textContent === play1) {
				sum++
			}
			
			if (sum === 3) {
				alert(`WINNER`);
			}
		}
	}

	for (let l = 0; l < winCombo.length; l++) {
		let combo = winCombo[l];
		let sum = 0;
		for (let k = 0; k < combo.length; k++) {
			if (cells[combo[k]].textContent === play2) {
				sum++
			}
			
			if (sum === 3) {
				alert(`WINNER`);
			}
		}
	}
}

function checkDraw() {
	if( x == 9)
	alert(`DRAW`)
}

// 	//i represents current spot in outside loop (arrays), j represents individual numbers in those arrays
// }
/* 
function checkWin() {
	if (topLeft.innerHTML === play1 && topMid.innerHTML === play1 && topRight.innerHTML === play1){
		alert('x wins!')
	}
}
 */
// define winning

// define draw
//  if ( x ==9){
	// alert(`draw`);
	// loop through cells and empty text content
// 	x = 0
// }