function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`
}

const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const boxesContainer = document.getElementById('boxes')
const input = document.querySelector('input')

createButton.addEventListener('click', function () {
	const amount = parseInt(input.value)

	if (amount >= 1 && amount <= 100) {
		removeBoxes()
		createBoxes(amount)
		input.value = ''
	}
})

function createBoxes(amount) {
	for (let i = 0; i < amount; i += 1) {
		const size = 30 + i * 10
		const box = createBox(size)
		boxesContainer.appendChild(box)
	}
}

function createBox(size) {
	const box = document.createElement('div')
	box.style.backgroundColor = getRandomHexColor()
	box.style.width = `${size}px`
	box.style.height = `${size}px`
	return box
}

destroyButton.addEventListener('click', destroyBoxes)

function destroyBoxes() {
	boxesContainer.innerHTML = ''
}

function removeBoxes() {
	while (boxesContainer.firstChild) {
		boxesContainer.removeChild(boxesContainer.firstChild)
	}
}
