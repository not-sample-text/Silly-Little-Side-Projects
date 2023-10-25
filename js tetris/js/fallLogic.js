//fallLogic.js

let level = 1;
let baseSpeed = 1000;
let moveDownInterval; // Variable to store the moveDown interval

function calculateSpeed(level, baseSpeed) {
	return baseSpeed / level;
}

// Use calculateSpeed to set fallSpeed
let fallSpeed = calculateSpeed(level, baseSpeed);

function moveDown() {
	if (moveDownInterval) {
		clearInterval(moveDownInterval); // Clear the existing interval
	}

	let xPositionLocked = false; // Initialize the X position lock
	let yPositionLocked = false; // Initialize the Y position lock

	moveDownInterval = setInterval(() => {
		if (
			!isCollision(
				tetromino.shape,
				tetromino.position.x,
				tetromino.position.y + 1
			)
		) {
			tetromino.position.y++; // Move the tetromino down by one row
		} else if (!xPositionLocked) {
			xPositionLocked = true; // Lock the X position one interval later
		} else if (!yPositionLocked) {
			yPositionLocked = true; // Lock the Y position
		} else {
			clearInterval(moveDownInterval); // Stop the interval when both X and Y positions are locked

			// Update the game board with the new positions
			for (let row = 0; row < tetromino.shape.length; row++) {
				for (let col = 0; col < tetromino.shape[row].length; col++) {
					if (tetromino.shape[row][col] !== 0) {
						const x = tetromino.position.x + col;
						const y = tetromino.position.y + row;
						if (y >= 0) {
							board[y][x] = tetromino.shape[row][col];
						}
					}
				}
			}

			// Optionally, add logic for handling collisions at the bottom
		}

		clearCanvas();
		drawShape(tetromino.shape, tetromino.position.x, tetromino.position.y);
	}, fallSpeed);
}
