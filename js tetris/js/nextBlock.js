// //nextBlock.js

// const maxBlockWidth = 4; // Number of columns
// const maxBlockHeight = 4; // Number of rows
// const scale = BLOCK_SIZE; // Scale factor

// // Define the "Next Block" canvas element and its context
// const nextBlockCanvas = document.getElementById("next-block");
// const nextBlockCtx = nextBlockCanvas.getContext("2d");

// // Function to set up the "Next Block" canvas
// function initializeNextBlockCanvas() {
// 	const canvasWidth = maxBlockWidth * scale;
// 	const canvasHeight = maxBlockHeight * scale;

// 	nextBlockCanvas.width = canvasWidth;
// 	nextBlockCanvas.height = canvasHeight;
// }

// // Function to draw the next block
// function drawNextBlock() {
// 	nextBlockCtx.clearRect(0, 0, nextBlockCanvas.width, nextBlockCanvas.height);

// 	// Calculate offsets to center the shape
// 	const xOffset = Math.floor((maxBlockWidth - tetromino.length) / 2);
// 	const yOffset = Math.floor((maxBlockHeight - tetromino.length) / 2);

// 	tetromino.shape.forEach((row, i) => {
// 		row.forEach((block, j) => {
// 			if (block !== 0) {
// 				nextBlockCtx.fillStyle = colors[block];
// 				nextBlockCtx.fillRect(
// 					(j + xOffset) * scale,
// 					(i + yOffset) * scale,
// 					scale,
// 					scale
// 				);
// 			}
// 		});
// 	});
// }

// let nextBlockMatrix = Array.from({ length: maxBlockHeight }, () =>
// 	new Array(maxBlockWidth).fill(0)
// );

// function updateNextBlockMatrix() {
// 	// Get the shape of the next block from randomShape
// 	const shape = tetromino;

// 	// Copy the shape into the nextBlockMatrix
// 	for (let row = 0; row < shape.length; row++) {
// 		for (let col = 0; col < shape[row].length; col++) {
// 			nextBlockMatrix[row][col] = shape[row][col];
// 		}
// 	}
// }

// // Get the shape of the next block from getRandomShape
// const shape = tetromino;

// // Call the setup and drawing functions
// initializeNextBlockCanvas();
// drawNextBlock();
