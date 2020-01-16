let cell = document.querySelectorAll(`.cell`)

cell.forEach(function(cell) {
	cell.addEventListener(`click`, cellClicked);
}); 

let play1 = `X`
let play2 = `O`
let wngm = [
	[1,2,3]
	[4,5,6]
	[7,8,9]
	[1,4,7]
	[2,5,8]
	[3,6,9]
	[3,5,7]
	[1,5,9]
]

function cellClicked(e) {

	e.target.textContent = play1;
	switch (play1){
		case `X`: 
			play1 = `O`
			break;
		case `O`:
			play1 = `X`
			break;
	}
} 
// switch between player1 & 2
// set x & o to block
// define winning
// define losing
// define draw