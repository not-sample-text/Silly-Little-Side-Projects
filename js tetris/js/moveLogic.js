let canMoveLeft = true;
let canMoveRight = true;
let softDropInterval; // Variable to store the softDrop interval

function moveRight() {
	event.preventDefault();
	if (!canMoveRight) return;
	clearCanvas();
	xOffset++;
	drawShape(randomShape, xOffset, yOffset);
	const direction = hasReachedBoundary(randomShape, xOffset);
	if (direction === "left") {
		canMoveRight = false;
	}
	canMoveLeft = true;
}

function moveLeft() {
	event.preventDefault();
	if (!canMoveLeft) return;
	clearCanvas();
	xOffset--;
	drawShape(randomShape, xOffset, yOffset);
	const direction = hasReachedBoundary(randomShape, xOffset);
	if (direction === "right") {
		canMoveLeft = false;
	}
	canMoveRight = true;
}

function softDrop() {
	if (softDropInterval) {
		clearInterval(softDropInterval); // Clear the existing interval
	}

	softDropInterval = setInterval(() => {
		if (lockYPosition) {
			// Block's Y position is locked, stop further movement
			clearInterval(softDropInterval);
			return;
		}

		yOffset++;
		clearCanvas();
		drawShape(randomShape, xOffset, yOffset);

		if (reachedBottom()) {
			console.log("reached bottom");
			lockYPosition = true; // Lock the Y position when it reaches the bottom
			clearInterval(softDropInterval); // Clear the interval
			setTimeout(() => {
				lockYPosition = false; // Unlock the Y position after a delay
				softDrop(); // Restart softDrop to continue moving horizontally
			}, fallSpeed);
		}
	}, 50); // Adjust the speed for the softDrop
}

function hasReachedBoundary(randomShape, xOffset) {
	if (xOffset < 1) {
		return "right";
	}
	if (xOffset + randomShape[0].length > COLS - 1) {
		return "left";
	}
	return "none";
}

// Add an event listener to trigger the left movement
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft" || event.key === "a") {
		moveLeft();
	}
});

// Add an event listener to trigger the right movement
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight" || event.key === "d") {
		moveRight();
	}
});

// Add an event listener to trigger the soft drop and clear the interval when the key is released
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowDown" || event.key === "s") {
		softDrop();
	}
});

document.addEventListener("keyup", (event) => {
	if (event.key === "ArrowDown" || event.key === "s") {
		clearInterval(softDropInterval);
	}
});
