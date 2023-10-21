// Get the canvas element and its 2D rendering context

let xOffset = Math.floor((COLS - randomShape[0].length) / 2);
let yOffset = 0;

play_button.addEventListener("click", () => {
	play();
});

function play() {
	drawShape(randomShape, xOffset, yOffset);
	moveDown();
}
