let level = 1;
let baseSpeed = 1000;
let fallSpeed = calculateSpeed(level, baseSpeed); // Call calculateSpeed to compute fallSpeed

let moveDownInterval; // Variable to store the moveDown interval
let lockYPosition = false; // Flag to track if Y position is locked

function calculateSpeed(level, baseSpeed) {
	return baseSpeed / level;
}

function lowestY(randomShape) {
	let lowestYValue = randomShape.length; // Initialize to the maximum possible Y-coordinate

	for (let row = 0; row < randomShape.length; row++) {
		for (let col = 0; col < randomShape[row].length; col++) {
			if (randomShape[row][col] !== 0 && row < lowestYValue) {
				lowestYValue = row;
			}
		}
	}

	return lowestYValue;
}

function isIBlock(randomShape) {
	return JSON.stringify(randomShape) === JSON.stringify(i_block);
}

function reachedBottom() {
	if (isIBlock(randomShape)) {
		return yOffset + lowestY(randomShape) === ROWS - 1;
	} else {
		return yOffset + lowestY(randomShape) === ROWS - 2;
	}
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
		clearCanvas();
		drawShape(randomShape, xOffset, yOffset);

		if (reachedBottom()) {
			console.log("reached bottom");
			lockYPosition = true; // Lock the Y position when it reaches the bottom
			setTimeout(() => {
				lockYPosition = false; // Unlock the Y position after a delay
			}, fallSpeed);
		}
	}, fallSpeed);
}
