const maxBlockWidth = 3; // Number of columns
const maxBlockHeight = 2; // Number of rows
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

	randomShape.forEach((row, i) => {
		row.forEach((block, j) => {
			if (block !== 0) {
				nextBlockCtx.fillStyle = colors[block];
				nextBlockCtx.fillRect(j * scale, i * scale, scale, scale);
			}
		});
	});
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
