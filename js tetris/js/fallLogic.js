let level = 1;
let baseSpeed = 1000;
let moveDownInterval; // Variable to store the moveDown interval

function calculateSpeed(level, baseSpeed) {
	return baseSpeed / level;
}

// Use calculateSpeed to set fallSpeed
let fallSpeed = calculateSpeed(level, baseSpeed);

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

		// Check if the piece has reached the bottom
		const isIBlock = JSON.stringify(randomShape) === JSON.stringify(i_block);
		const reachedBottom = isIBlock
			? yOffset + lowestY(randomShape) === ROWS - 1
			: yOffset + lowestY(randomShape) === ROWS - 2;

		if (reachedBottom) {
			console.log("reached bottom");
			lockYPosition = true; // Lock the Y position when it reaches the bottom
			setTimeout(() => {
				lockYPosition = false; // Unlock the Y position after a delay
			}, fallSpeed);
		}
	}, fallSpeed);
}
