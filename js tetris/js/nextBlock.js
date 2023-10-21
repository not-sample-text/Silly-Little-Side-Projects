let randomShape = getRandomShape();

// Define the proportions based on the L block
const maxBlockWidth = 4; // Number of columns
const maxBlockHeight = 2; // Number of rows

// Choose a scale or factor (e.g., 30 pixels per cell)
const scale = 25; // Adjust as needed

// Calculate the canvas dimensions
const canvasWidth = maxBlockWidth * scale;
const canvasHeight = maxBlockHeight * scale;

// Create the "Next Block" canvas element
const nextBlockCanvas = document.getElementById("next-block");
nextBlockCanvas.width = canvasWidth / 1.325;
nextBlockCanvas.height = canvasHeight;

// Get the 2D rendering context for the "nextBlockCanvas"
const nextBlockCtx = nextBlockCanvas.getContext("2d");

// Draw the Tetromino on the nextBlockCanvas
randomShape.forEach((row, i) => {
	row.forEach((block, j) => {
		if (block !== 0) {
			nextBlockCtx.fillStyle = colors[block]; // Subtract 1 to map to the colors array
			nextBlockCtx.fillRect(j * scale, i * scale, scale, scale);
		}
	});
});
