// // MoveLogic.js

// let blockState = "active";

// // Function to check for collisions at a specific position with a given shape
// function isCollision(shape, x, y) {
// 	for (let row = 0; row < shape.length; row++) {
// 		for (let col = 0; col < shape[row].length; col++) {
// 			if (shape[row][col] !== 0) {
// 				const boardX = x + col;
// 				const boardY = y + row;

// 				if (
// 					boardX < 0 ||
// 					boardX >= COLS || // Check for horizontal edge collisions
// 					boardY >= ROWS || // Check for bottom edge collision
// 					(boardY >= 0 && board[boardY][boardX] !== 0) // Check for block overlap
// 				) {
// 					return true; // Collision detected
// 				}
// 			}
// 		}
// 	}
// 	return false; // No collision
// }

// // Function to move the tetromino left
// function moveLeft() {
// 	if (
// 		!isCollision(
// 			tetromino.shape,
// 			tetromino.position.x - 1,
// 			tetromino.position.y
// 		)
// 	) {
// 		tetromino.position.x -= 1;
// 	}
// }

// // Function to move the tetromino right
// function moveRight() {
// 	if (
// 		!isCollision(
// 			tetromino.shape,
// 			tetromino.position.x + 1,
// 			tetromino.position.y
// 		)
// 	) {
// 		tetromino.position.x += 1;
// 	}
// }

// // Function to check if the tetromino can rotate clockwise with collision handling
// function rotateClockwise() {
// 	const nextIndex = (tetromino.rotationIndex + 1) % tetromino.shape.length;
// 	const nextShape = tetromino.shape[nextIndex];
// 	const currentX = tetromino.position.x;
// 	const currentY = tetromino.position.y;

// 	// Check if the next shape would collide with existing blocks or edges
// 	if (!isCollision(nextShape, currentX, currentY)) {
// 		tetromino.shape = nextShape;
// 		tetromino.rotationIndex = nextIndex;
// 	} else {
// 		// Try moving left or right to avoid overlap with edges
// 		if (!isCollision(nextShape, currentX - 1, currentY)) {
// 			tetromino.position.x = currentX - 1;
// 			tetromino.shape = nextShape;
// 			tetromino.rotationIndex = nextIndex;
// 		} else if (!isCollision(nextShape, currentX + 1, currentY)) {
// 			tetromino.position.x = currentX + 1;
// 			tetromino.shape = nextShape;
// 			tetromino.rotationIndex = nextIndex;
// 		} else {
// 			// Try moving up one row and check for collisions
// 			if (!isCollision(nextShape, currentX, currentY - 1)) {
// 				tetromino.position.y = currentY - 1;
// 				tetromino.shape = nextShape;
// 				tetromino.rotationIndex = nextIndex;
// 			}
// 		}
// 	}
// }

// document.addEventListener("keydown", (event) => {
// 	if (blockState === "active") {
// 		switch (event.key) {
// 			case "ArrowLeft":
// 			case "a":
// 				moveLeft();
// 				break;
// 			case "ArrowRight":
// 			case "d":
// 				moveRight();
// 				break;
// 			case "ArrowUp":
// 			case "w":
// 				rotateClockwise();
// 				break;
// 		}
// 	}
// });
