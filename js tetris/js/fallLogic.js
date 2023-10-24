//fallLogic.js

let level = 1;
let baseSpeed = 1000;
let moveDownInterval; // Variable to store the moveDown interval

function calculateSpeed(level, baseSpeed) {
	return baseSpeed / level;
}

// Use calculateSpeed to set fallSpeed
let fallSpeed = calculateSpeed(level, baseSpeed);

// Function to calculate the lowest Y-coordinate for the current shape
function lowestY(randomShape) {
	let lowestYValue = 0; // Initialize to the minimum possible Y-coordinate

	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0) {
				const y = yOffset + row;
				if (y > lowestYValue) {
					lowestYValue = y;
				}
			}
		}
	}
	console.log("Lowest Y:", lowestYValue);

	return lowestYValue;
}

function moveDown() {
	if (moveDownInterval) {
		clearInterval(moveDownInterval); // Clear the existing interval
	}

	moveDownInterval = setInterval(() => {
		if (lockYPosition) {
			clearInterval(moveDownInterval); // Block's Y position is locked, stop further movement
			return;
		}

		yOffset++;

		// Calculate the new lowest Y-coordinate after moving down
		const newY = lowestY(randomShape);

		// Check if the piece has reached the bottom
		const reachedBottom = newY >= ROWS || !canMoveDown();

		if (reachedBottom) {
			console.log("reached bottom");
			lockYPosition = true; // Lock the Y position when it reaches the bottom
			setTimeout(() => {
				lockYPosition = false; // Unlock the Y position after a delay
			}, fallSpeed);
		}

		clearShape(randomShape, xOffset, yOffset - 1); // Clear the old position
		updateGameBoard(); // Update the game board with the current piece position
		clearCanvas();
		drawShape(randomShape, xOffset, yOffset);
	}, fallSpeed);
}
