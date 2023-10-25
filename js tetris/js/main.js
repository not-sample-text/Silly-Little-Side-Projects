// //main.js

// // Calculate the initial xOffset to center the piece
// let xOffset = Math.floor((COLS - tetromino.length) / 2);

// // Set the initial yOffset to 0
// let yOffset = 0;

// function startGame() {
// 	// Spawn a new block
// 	spawnNewPiece();
// 	moveDown();
// }

// function reset() {
// 	location.reload();
// }

// function spawnNewPiece() {
// 	// Draw the first piece on the canvas
// 	drawShape(tetromino, xOffset, yOffset);
// }

// play_button.addEventListener("click", () => {
// 	if (play_button.textContent === "Play") {
// 		play_button.textContent = "Reset";
// 		startGame();
// 	} else {
// 		play_button.textContent = "Play";
// 		reset();
// 	}
// });

// // get the chosen random shape, calculate where the middle column would be, and draw the shape on the canvas

// /*
// let xOffset = Math.floor((COLS - randomShape[0].length) / 2);
// let yOffset = 0;

// function isGameOver() {
// 	for (let row = 0; row < randomShape.length; row++) {
// 		for (let col = 0; col < randomShape[row].length; col++) {
// 			if (randomShape[row][col] !== 0) {
// 				const x = xOffset + col;
// 				const y = yOffset + row;
// 				if (y < 0 || (y < ROWS && arr[y][x] !== 0)) {
// 					return true;
// 				}
// 			}
// 		}
// 	}
// 	return false;
// }

// function spawnNewPiece() {
// 	// Generate a new random shape for the game board
// 	randomShape = getRandomShape();
// 	blockState = "active";
// 	yOffset = 0;
// 	xOffset = Math.floor((COLS - randomShape[0].length) / 2);
// 	drawShape(randomShape, xOffset, yOffset);
// 	for (let row = 0; row < randomShape.length; row++) {
// 		for (let col = 0; col < randomShape[row].length; col++) {
// 			if (randomShape[row][col] !== 0) {
// 				const x = xOffset + col;
// 				const y = yOffset + row;
// 				arr[y][x] = randomShape[row][col];
// 			}
// 		}
// 	}

// 	// Generate a new random shape for the "Next Block" canvas
// 	const nextBlockShape = getRandomShape();

// 	// Draw the new piece on the "Next Block" canvas
// 	drawNextBlock(nextBlockShape);
// }

// function play() {
// 	if (isGameOver()) {
// 		alert("Game Over");
// 		reset();
// 		return;
// 	}

// 	spawnNewPiece();
// 	moveDown();

// 	if (blockState === "locked") {
// 		spawnNewPiece();
// 	}
// }
// */
