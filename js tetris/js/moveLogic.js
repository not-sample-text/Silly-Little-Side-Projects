// MoveLogic.js

let lockYPosition = false; // Flag to track if Y position is locked
let blockState = "active"; // Initialize the block state as 'active'

let rotationIndex = 0; // Initialize the rotation index

function rotateShape() {
	// Define the possible rotations for the current shape
	const rotations = [
		randomShape // Initial rotation
		// Add other rotations here
	];

	// Increment the rotation index to switch to the next rotation
	rotationIndex = (rotationIndex + 1) % rotations.length;
	randomShape = rotations[rotationIndex];
}

function movePiece(direction) {
	const deltaX = direction === "left" ? -1 : direction === "right" ? 1 : 0;
	const deltaY = direction === "down" ? 1 : 0;

	if (blockState === "active") {
		// Clear the previous position of the piece in the table
		clearShape(randomShape[0], xOffset, yOffset);

		// Update the xOffset and yOffset based on the user's input
		if (direction === "left" && canMoveLeft()) {
			xOffset += deltaX;
		} else if (direction === "right" && canMoveRight()) {
			xOffset += deltaX;
		} else if (direction === "down" && canMoveDown()) {
			yOffset += deltaY;
		}

		// Update the position of the piece in the table
		for (let row = 0; row < randomShape[0].length; row++) {
			for (let col = 0; col < randomShape[0][row].length; col++) {
				if (randomShape[0][row][col] !== 0) {
					const x = xOffset + col;
					const y = yOffset + row;
					if (y >= 0) {
						arr[y][x] = randomShape[0][row][col];
					}
				}
			}
		}

		// Draw the updated piece on the canvas
		drawShape(randomShape[0], xOffset, yOffset);

		if (!canMoveDown()) {
			// Lock the Y position when a collision occurs
			lockYPosition = true;
			// Transition to 'locked' state after a delay
			setTimeout(() => {
				blockState = "locked";
				lockYPosition = false; // Unlock the Y position
				console.log("Piece is locked");
			}, fallSpeed * 2);
		}
	} else if (blockState === "locked") {
		// In 'locked' state, the user can only move the block left or right
		if (direction === "left" && canMoveLeft()) {
			xOffset += deltaX;
		} else if (direction === "right" && canMoveRight()) {
			xOffset += deltaX;
		}
	}
}

function canMoveRight() {
	// Check if the game piece can move right
	for (let row = 0; row < randomShape[0].length; row++) {
		for (let col = 0; col < randomShape[0][row].length; col++) {
			if (randomShape[0][row][col] !== 0) {
				const newX = xOffset + col + 1;
				if (newX >= COLS || arr[yOffset + row][newX] !== 0) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

function canMoveLeft() {
	for (let row = 0; row < randomShape[0].length; row++) {
		for (let col = 0; col < randomShape[0][row].length; col++) {
			if (randomShape[0][row][col] !== 0) {
				const newX = xOffset + col - 1;
				if (
					newX < 0 ||
					(yOffset + row >= 0 && arr[yOffset + row][newX] !== 0)
				) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

function canMoveDown() {
	for (let row = 0; row < randomShape[0].length; row++) {
		for (let col = 0; col < randomShape[0][row].length; col++) {
			if (randomShape[0][row][col] !== 0) {
				const x = xOffset + col;
				const y = yOffset + row + 1; // Check one row below

				if (y >= ROWS || (y >= 0 && arr[y][x] !== 0)) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

// Function to check if a rotation is valid
function canRotate(newShape) {
	for (let row = 0; row < newShape.length; row++) {
		for (let col = 0; col < newShape[row].length; col++) {
			if (newShape[row][col] !== 0) {
				const x = xOffset + col;
				const y = yOffset + row;
				if (x < 0 || x >= COLS || y >= ROWS || (y >= 0 && arr[y][x] !== 0)) {
					return false; // Rotation not allowed
				}
			}
		}
	}
	return true; // Rotation is valid
}

// Inside your event listener, use this function to handle rotation:
document.addEventListener("keydown", (event) => {
	if (blockState === "active") {
		switch (event.key) {
			case "ArrowLeft":
			case "a":
				if (canMoveLeft()) {
					xOffset -= 1;
					clearShape(randomShape[0], xOffset + 1, yOffset);
					drawShape(randomShape[0], xOffset, yOffset);
				}
				break;
			case "ArrowRight":
			case "d":
				if (canMoveRight()) {
					xOffset += 1;
					clearShape(randomShape[0], xOffset - 1, yOffset);
					drawShape(randomShape[0], xOffset, yOffset);
				}
				break;
			case "ArrowDown":
			case "s":
				if (canMoveDown()) {
					yOffset += 1;
					clearShape(randomShape[0], xOffset, yOffset - 1);
					drawShape(randomShape[0], xOffset, yOffset);
				}
				break;
			case "ArrowUp":
			case "w":
				rotateShape(); // Rotate the shape to the next rotation
				break;
		}
	}
});
