let level = 1;
let baseSpeed = 1000;
let fallSpeed = baseSpeed / level;

function calculateSpeed(level, baseSpeed) {
	return baseSpeed / level;
}

function moveDown() {
	setInterval(() => {
		yOffset++;
		clearCanvas();
		drawShape(randomShape, xOffset, yOffset);
	}, fallSpeed);
}
