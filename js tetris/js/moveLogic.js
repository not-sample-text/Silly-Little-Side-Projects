let lockYPosition = false; // Flag to track if Y position is locked
let blockState = "active"; // Initialize the block state as 'active'

function movePiece(direction) {
	const deltaX = direction === "left" ? -1 : direction === "right" ? 1 : 0;
	const deltaY = direction === "down" ? 1 : 0;

	if (blockState === "active") {
		clearShape(randomShape, xOffset, yOffset);

		if (direction === "left" && canMoveLeft()) {
			xOffset += deltaX;
		} else if (direction === "right" && canMoveRight()) {
			xOffset += deltaX;
		} else if (direction === "down" && canMoveDown()) {
			yOffset += deltaY;
		}

		drawShape(randomShape, xOffset, yOffset);

		if (!canMoveDown()) {
			// Lock the Y position when a collision occurs
			lockYPosition = true;
			// Transition to 'locked' state after a delay
			setTimeout(() => {
				blockState = "locked";
				lockYPosition = false; // Unlock the Y position
				console.log("Piece is locked");

				// Move the "spawnNewPiece" call here
				spawnNewPiece(); // Spawn a new piece
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

function canMoveLeft() {
	// Check if the game piece can move left
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const newX = xOffset + col - 1;
				if (newX < 0 || arr[yOffset + row][newX] !== 0) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

function canMoveRight() {
	// Check if the game piece can move right
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const newX = xOffset + col + 1;
				if (newX >= COLS || arr[yOffset + row][newX] !== 0) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

function canMoveDown() {
	// Check if the game piece can move down
	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const newY = yOffset + row + 1;
				if (newY >= ROWS || arr[newY][xOffset + col] !== 0) {
					return false; // Collision detected
				}
			}
		}
	}
	return true; // No collision
}

// Rotate the shape clockwise with the center of rotation as the pivot
function rotateShape(shape) {
	// Transpose the shape
	const transposedShape = transposeMatrix(shape);

	// Flip it horizontally
	const rotatedShape = transposedShape.map((row) => row.reverse());

	return rotatedShape;
}

function transposeMatrix(matrix) {
	const rows = matrix.length;
	const cols = matrix[0].length;

	const transposed = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			transposed[j][i] = matrix[i][j];
		}
	}

	return transposed;
}

// Inside your event listener, use this function to handle rotation:
document.addEventListener("keydown", (event) => {
	if (blockState === "active") {
		switch (event.key) {
			case "ArrowLeft":
			case "a":
				movePiece("left");
				break;
			case "ArrowRight":
			case "d":
				movePiece("right");
				break;
			case "ArrowDown":
			case "s":
				movePiece("down");
				break;
			case "ArrowUp":
			case "w":
				console.log("ArrowUp key pressed in 'active' state");
				// Rotate the shape clockwise only when it's in the "active" state
				const rotated = rotateShape(randomShape);
				// Clear the old shape
				clearShape(randomShape, xOffset, yOffset);
				// Update the shape with the rotated one
				randomShape = rotated;
				// Draw the new shape
				drawShape(randomShape, xOffset, yOffset);
				break;
		}
	}
});
