// board.js

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const play_button = document.getElementById("start");

// Create a 2D array to represent the game board
let board = new Array(ROWS).fill().map(() => new Array(COLS).fill(0));

// Function to initialize the game board
function initializeBoard() {
	canvas.width = COLS * BLOCK_SIZE;
	canvas.height = ROWS * BLOCK_SIZE;
}

// Call the initialization function when the page loads
window.addEventListener("load", initializeBoard);

// Function to draw an individual block at (x, y) with a specific color
function drawBlock(x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

// Function to draw an entire shape
function drawShape(shape, offset, color) {
	shape.forEach((row, rowIndex) => {
		row.forEach((block, colIndex) => {
			if (block) {
				const x = offset.x + colIndex;
				const y = offset.y + rowIndex;
				drawBlock(x, y, color);
			}
		});
	});
}

// Function to draw the initial game grid
function drawGrid() {
	for (let y = 0; y < ROWS; y++) {
		for (let x = 0; x < COLS; x++) {
			const value = board[y][x]; // Access the value from your game board array
			const color = colors[value] || "transparent";
			drawBlock(x, y, color);
		}
	}
}

// Function to clear an individual block at (x, y)
function clearBlock(x, y) {
	ctx.clearRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

// Function to clear an entire shape
function clearShape(shape, offset) {
	shape.forEach((row, rowIndex) => {
		row.forEach((block, colIndex) => {
			if (block) {
				const x = offset.x + colIndex;
				const y = offset.y + rowIndex;
				clearBlock(x, y);
			}
		});
	});
}

// Function to clear the entire game board
function clearBoard() {
	for (let y = 0; y < ROWS; y++) {
		for (let x = 0; x < COLS; x++) {
			clearBlock(x, y);
		}
	}
}

// Function to update the game board with the new positions of the tetromino
function updateGameBoard(tetromino, position, xOffset, yOffset) {
	// Clear the old position of the tetromino
	clearShape(tetromino.shape, position);

	// Update the game board with the new position of the tetromino
	for (let row = 0; row < tetromino.shape.length; row++) {
		for (let col = 0; col < tetromino.shape[row].length; col++) {
			if (tetromino.shape[row][col] !== 0) {
				const x = position.x + col + xOffset;
				const y = position.y + row + yOffset;
				if (y >= 0) {
					board[y][x] = tetromino.color;
				}
			}
		}
	}
}
