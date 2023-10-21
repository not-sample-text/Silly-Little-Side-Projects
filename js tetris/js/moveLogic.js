function moveRight() {
	event.preventDefault();
	// Clear the canvas before rendering the new shape
	clearCanvas();
	xOffset++;
	drawShape(randomShape, xOffset, yOffset);
	const direction = hasReachedBoundary(randomShape, xOffset);
	if (direction === "left") {
		// If the block has reached the right boundary, move it to the left
		xOffset -= 2;
	}
}

function moveLeft() {
	event.preventDefault();
	// Clear the canvas before rendering the new shape
	clearCanvas();
	xOffset--;
	drawShape(randomShape, xOffset, yOffset);
	const direction = hasReachedBoundary(randomShape, xOffset);
	if (direction === "right") {
		// If the block has reached the left boundary, move it to the right
		xOffset += 2;
	}
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

function hasReachedBoundary(randomShape, xOffset) {
	// Check if the shape has reached the left boundary
	if (xOffset < 0) {
		return "right";
	}

	// Check if the shape has reached the right boundary
	if (xOffset + randomShape[0].length > COLS) {
		return "left";
	}

	return "none";
}
