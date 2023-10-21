// Create the game board array and initialize it
let arr = [];
for (let i = 0; i < ROWS; i++) {
	arr[i] = [];
	for (let j = 0; j < COLS; j++) {
		arr[i][j] = 0;
	}
}

// Create a function to draw a shape on the canvas
function drawShape(shape, xOffset, yOffset) {
	shape.forEach((row, i) => {
		row.forEach((block, j) => {
			if (block !== 0) {
				const x = (j + xOffset) * BLOCK_SIZE;
				const y = (i + yOffset) * BLOCK_SIZE;
				ctx.fillStyle = colors[block];
				ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
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
		const x = j * BLOCK_SIZE;
		const y = i * BLOCK_SIZE;
		const value = arr[i][j];
		const color = colors[value] || "transparent"; // Default to transparent if no color is found

		ctx.fillStyle = color;
		ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
	}
}
