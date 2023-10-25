//nextBlock.js

const maxBlockWidth = 4;
const maxBlockHeight = 4;
const scale = 25; // Scale factor
const nextBlockCanvas = document.getElementById("next-block");
const nextBlockCtx = nextBlockCanvas.getContext("2d");

function initializeNextBlockCanvas() {
	// Calculate the canvas width and height
	const canvasWidth = maxBlockWidth * scale;
	const canvasHeight = maxBlockHeight * scale;

	// Set the canvas dimensions
	nextBlockCanvas.width = canvasWidth;
	nextBlockCanvas.height = canvasHeight;
}

// Call the function to initialize the next block canvas
initializeNextBlockCanvas();

let nextBlock = getRandomPiece(); // Initialize the next block with a random piece

function generateNextBlock() {
	nextBlock = getRandomPiece(); // Generate a new random piece for the next block
}

// Call the function to generate the initial next block
generateNextBlock();

function clearNextBlockCanvas() {
	nextBlockCtx.clearRect(0, 0, nextBlockCanvas.width, nextBlockCanvas.height);
}

function drawNextBlock() {
	clearNextBlockCanvas(); // Clear the canvas first
	const shape = nextBlock[0]; // Get the shape of the next block

	// Loop through the shape and draw it on the canvas
	for (let row = 0; row < shape.length; row++) {
		for (let col = 0; col < shape[row].length; col++) {
			const value = shape[row][col];
			if (value !== 0) {
				nextBlockCtx.fillStyle = colors[value]; // Set the fill color
				nextBlockCtx.fillRect(col * scale, row * scale, scale, scale); // Draw a block
			}
		}
	}
}

// Call the drawNextBlock function to initially draw the next block
drawNextBlock();

/*
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
*/
