// Define the Tetris block arrays
// const blocks = [i_block, j_block, l_block, o_block, s_block, t_block, z_block];

// Define the position of the top-left corner of the active block
const middleColumn = Math.floor(COLUMNS / 2);
let activeBlockType = blocks[Math.floor(Math.random() * blocks.length)];
let activeBlockX = middleColumn - Math.floor(activeBlockType[0].length / 2);
let activeBlockY = 0;

// Define the active block rotation
let activeBlockRotation = 0;

// Update the table array with the numbers for the active block
function updateTable() {
	for (let i = 0; i < activeBlockType.length; i++) {
		for (let j = 0; j < activeBlockType[i].length; j++) {
			if (activeBlockType[i][j] !== 0) {
				const row = activeBlockY + i;
				const col = activeBlockX + j;
				if (row >= 0 && row < ROWS && col >= 0 && col < COLUMNS) {
					table[row][col] = activeBlockType[i][j];
				}
			}
		}
	}
}

// Clear the current position of the active block in the table array
function clearBlock() {
	for (let i = 0; i < activeBlockType.length; i++) {
		for (let j = 0; j < activeBlockType[i].length; j++) {
			if (activeBlockType[i][j] !== 0) {
				const row = activeBlockY + i;
				const col = activeBlockX + j;
				if (row >= 0 && row < ROWS && col >= 0 && col < COLUMNS) {
					table[row][col] = 0;
				}
			}
		}
	}
}

// Move the active block down by one line and update the table
function moveDown() {
	clearBlock();
	activeBlockY++;
	updateTable();
	console.table(table);
	if (activeBlockY + activeBlockType.length > ROWS) {
		clearInterval(intervalId);
	}
}

// Example usage: choose a random block to make active and move it down every half second
activeBlockType = blocks[Math.floor(Math.random() * blocks.length)];
updateTable();
console.table(table);
const intervalId = setInterval(moveDown, 500);
