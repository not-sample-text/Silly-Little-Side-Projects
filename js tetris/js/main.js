// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const CELL_SIZE = BLOCK_SIZE;

// Create the game board array and initialize it
let arr = [];
for (let i = 0; i < ROWS; i++) {
	arr[i] = [];
	for (let j = 0; j < COLS; j++) {
		arr[i][j] = 0;
	}
}

// Define a function to get a random shape
function getRandomShape() {
	const shapes = [
		i_block,
		j_block,
		l_block,
		o_block,
		s_block,
		z_block,
		t_block
	];
	const randomIndex = Math.floor(Math.random() * shapes.length);
	return shapes[randomIndex];
}

// Create a function to draw a shape on the canvas
function drawShape(shape, xOffset, yOffset) {
	shape.forEach((row, i) => {
		row.forEach((block, j) => {
			if (block !== 0) {
				const x = (j + xOffset) * CELL_SIZE;
				const y = (i + yOffset) * CELL_SIZE;
				ctx.fillStyle = colors[block];
				ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
			}
		});
	});
}

// Create a function to clear the canvas
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Add an event listener to trigger the random shape placement
document.addEventListener("keydown", (event) => {
	if (event.key === "r") {
		// Clear the canvas before rendering the new shape
		clearCanvas();
		// You can use any key you prefer
		const randomShape = getRandomShape();
		const xOffset = Math.floor((COLS - randomShape[0].length) / 2);
		const yOffset = 0;
		drawShape(randomShape, xOffset, yOffset);
	}
});

// Calculate the canvas size based on the grid size
canvas.width = COLS * CELL_SIZE;
canvas.height = ROWS * CELL_SIZE;

// Draw the initial grid
for (let i = 0; i < ROWS; i++) {
	for (let j = 0; j < COLS; j++) {
		const x = j * CELL_SIZE;
		const y = i * CELL_SIZE;
		const value = arr[i][j];
		const color = colors[value] || "transparent"; // Default to transparent if no color is found

		ctx.fillStyle = color;
		ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
	}
}
