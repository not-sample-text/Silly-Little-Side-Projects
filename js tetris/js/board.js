// board.js

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
	for (let i = 0; i < shape.length; i++) {
		for (let j = 0; j < shape[i].length; j++) {
			if (shape[i][j] !== 0) {
				const x = xOffset + j;
				const y = yOffset + i;
				const color = colors[shape[i][j]];
				drawBlock(x, y, color, ctx);
			}
		}
	}
}

function clearBlock(x, y, ctx) {
	const blockSize = BLOCK_SIZE;
	ctx.clearRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

// Modify the clearShape function to clear the old position of the piece
function clearShape(shape, x, y) {
	for (let row = 0; row < shape.length; row++) {
		for (let col = 0; col < shape[row].length; col++) {
			if (shape[row][col] !== 0) {
				const xCoord = x + col;
				const yCoord = y + row;
				if (yCoord >= 0 && yCoord < ROWS && xCoord >= 0 && xCoord < COLS) {
					arr[yCoord][xCoord] = 0; // Clear the position on the game board table
				}
				clearBlock(xCoord, yCoord, ctx); // Clear the position on the canvas
			}
		}
	}
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

function updateGameBoard() {
	clearShape(randomShape, xOffset, yOffset); // Clear the old position of the piece
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const x = xOffset + col;
				const y = yOffset + row;
				if (y >= 0) {
					arr[y][x] = randomShape[row][col];
				}
			}
		}
	}
	console.table(arr);
}
