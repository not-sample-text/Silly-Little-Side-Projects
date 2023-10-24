//nextBlock.js

const maxBlockWidth = 4; // Adjust the number of columns for rotated blocks
const maxBlockHeight = 4; // Adjust the number of rows for rotated blocks
const scale = 25; // Scale factor

// Define the "Next Block" canvas element and its context
const nextBlockCanvas = document.getElementById("next-block");
const nextBlockCtx = nextBlockCanvas.getContext("2d");

// Function to set up the "Next Block" canvas
function initializeNextBlockCanvas() {
	const canvasWidth = maxBlockWidth * scale;
	const canvasHeight = maxBlockHeight * scale;

	nextBlockCanvas.width = canvasWidth;
	nextBlockCanvas.height = canvasHeight;
}

// Function to draw the next block
function drawNextBlock() {
	nextBlockCtx.clearRect(0, 0, nextBlockCanvas.width, nextBlockCanvas.height);

	for (let i = 0; i < randomShape.length; i++) {
		for (let j = 0; j < randomShape[i].length; j++) {
			if (randomShape[i][j] !== 0) {
				nextBlockCtx.fillStyle = colors[randomShape[i][j]];
				nextBlockCtx.fillRect(j * scale, i * scale, scale, scale);
			}
		}
	}
}

// Function to generate and set the next random shape
function setNextRandomShape() {
	randomShape = getRandomShape(); // Generate the next random shape
	drawNextBlock(); // Update the "Next Block" canvas
}

// Call the function to set the initial random shape
setNextRandomShape();

// Call the setup and drawing functions
initializeNextBlockCanvas();
drawNextBlock();
