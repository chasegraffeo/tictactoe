let cell =document.querySelectorAll(`.cell`)

cell.forEach(function(cell) {
	cell.addEventListener(`click`, cellClicked);
}); 

let x_class = "X"
let o_class = `o`

function cellClicked(e) {

	e.target.textContent = x_class;
	switch (x_class){
		case `X`: 
			x_class = `O`
			break;
		case `O`:
			x_class = `X`
			break;
	}
} 
