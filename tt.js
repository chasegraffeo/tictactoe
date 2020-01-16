const x_class = `x`
const circle_class = `circle`
const cellElements = documents.querySelectorAll(`[data-cell]`)
var circleTurn

cellElements.forEach(cell => {
	cell.addEventListener(`click`, handleClick, { once: true})
})

function handleClicked(e) {
	const cell = e.target
	const currentClass = circleTurn ? circle_class : x_class
	placeMark(cell, currentClass)
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

