let xOffset = Math.floor((COLS - randomShape[0].length) / 2);
let yOffset = 0;

play_button.addEventListener("click", () => {
	if (play_button.textContent === "Play") {
		play_button.textContent = "Reset";
		play();
	} else {
		play_button.textContent = "Play";
		reset();
		clearNextBlockCanvas(); // Clear the "Next Block" canvas
	}
});

function reset() {
	clearCanvas(); // Clear the game canvas
	clearNextBlockCanvas(); // Clear the "Next Block" canvas
	location.reload();
}

function clearNextBlockCanvas() {
	nextBlockCtx.clearRect(0, 0, nextBlockCanvas.width, nextBlockCanvas.height);
}

// Check for a game over condition
function isGameOver() {
	// Check if the initial position is blocked
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const x = xOffset + col;
				const y = yOffset + row;
				if (y < 0 || (y < ROWS && arr[y][x] !== 0)) {
					return true; // Game over
				}
			}
		}
	}
	return false;
}

// Define a function to spawn a new piece
function spawnNewPiece() {
	console.table(arr);
	// Get a new random shape
	randomShape = getRandomShape();

	// Reset the piece state to "active"
	blockState = "active";

	// Reset the yOffset to the top of the board
	yOffset = 0;

	// Calculate the initial xOffset to center the piece
	xOffset = Math.floor((COLS - randomShape[0].length) / 2);

	// Draw the new piece on the canvas
	drawShape(randomShape, xOffset, yOffset);

	// Apply the values of the locked piece to the game board (arr)
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const x = xOffset + col;
				const y = yOffset + row;
				arr[y][x] = randomShape[row][col];
			}
		}
	}
}

// Modify the play function to check for game over
function play() {
	if (isGameOver()) {
		alert("Game Over"); // Display a game over message
		reset();
		return;
	}

	spawnNewPiece();
	moveDown();

	// Check if the piece is locked (i.e., it can't move down anymore)
	if (blockState === "locked") {
		spawnNewPiece(); // Spawn a new piece
	}
}
