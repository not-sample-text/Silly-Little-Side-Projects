const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const play_button = document.getElementById("start");

// Create the game board array and initialize it
let arr = new Array(ROWS).fill().map(() => new Array(COLS).fill(0));

// Modify the drawBlock function to accept x and y coordinates
function drawBlock(x, y, color, ctx) {
	const blockSize = BLOCK_SIZE;
	ctx.fillStyle = color;
	ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

// Create a function to draw a shape on the canvas
function drawShape(shape, xOffset, yOffset) {
	shape.forEach((row, i) => {
		row.forEach((block, j) => {
			if (block !== 0) {
				const x = xOffset + j;
				const y = yOffset + i;
				const color = colors[block];
				drawBlock(x, y, color, ctx);
			}
		});
	});
}

// Modify the clearBlock function to accept x and y coordinates
function clearBlock(x, y, ctx) {
	const blockSize = BLOCK_SIZE;
	ctx.clearRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function clearShape(shape, xOffset, yOffset) {
	shape.forEach((row, i) => {
		row.forEach((block, j) => {
			if (block !== 0) {
				const x = xOffset + j;
				const y = yOffset + i;
				clearBlock(x, y, ctx);
			}
		});
	});
}

// Create a function to clear the canvas
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Calculate the canvas size based on the grid size
canvas.width = COLS * BLOCK_SIZE;
canvas.height = ROWS * BLOCK_SIZE;

// Draw the initial grid
for (let i = 0; i < ROWS; i++) {
	for (let j = 0; j < COLS; j++) {
		const x = j;
		const y = i;
		const value = arr[i][j];
		const color = colors[value] || "transparent";
		drawBlock(x, y, color, ctx);
	}
}
