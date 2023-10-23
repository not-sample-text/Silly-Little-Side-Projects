let lockYPosition = false; // Flag to track if Y position is locked

function movePiece(direction) {
	const deltaX = direction === "left" ? -1 : direction === "right" ? 1 : 0;
	const deltaY = direction === "down" ? 1 : 0;

	if (direction === "left" && canMoveLeft()) {
		clearBlock();
		xOffset += deltaX;
		drawBlock();
	} else if (direction === "right" && canMoveRight()) {
		clearBlock();
		xOffset += deltaX;
		drawBlock();
	} else if (direction === "down" && canMoveDown()) {
		clearBlock();
		yOffset += deltaY;
		drawBlock();
	}

	if (direction === "down" && !canMoveDown()) {
		lockYPosition = true; // Lock the Y position when a collision occurs
		setTimeout(() => {
			lockYPosition = false; // Unlock the Y position after the same interval as the fall interval
		}, fallSpeed);
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

// Updated event listener
document.addEventListener("keydown", (event) => {
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
			randomShape = rotateClockwise(randomShape);
			clearBlock();
			drawBlock();
			break;
	}
});
