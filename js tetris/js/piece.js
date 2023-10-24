//piece.js

// I
const i_block = [
	[[1, 1, 1, 1]], // Initial rotation
	[[1], [1], [1], [1]], // 90-degree rotation
	[[1, 1, 1, 1]], // 180-degree rotation (same as initial rotation)
	[[1], [1], [1], [1]] // 270-degree rotation (same as 90-degree rotation)
];

// J
const j_block = [
	[
		[2, 2, 2],
		[0, 0, 2]
	], // Initial rotation
	[
		[0, 2],
		[0, 2],
		[2, 2]
	], // 90-degree rotation
	[
		[2, 0, 0],
		[2, 2, 2]
	], // 180-degree rotation
	[
		[2, 2],
		[2, 0],
		[2, 0]
	] // 270-degree rotation
];

// L
const l_block = [
	[
		[3, 3, 3],
		[3, 0, 0]
	], // Initial rotation
	[
		[3, 3],
		[0, 3],
		[0, 3]
	], // 90-degree rotation
	[
		[0, 0, 3],
		[3, 3, 3]
	], // 180-degree rotation
	[
		[3, 0],
		[3, 0],
		[3, 3]
	] // 270-degree rotation
];

// O
const o_block = [
	[
		[4, 4],
		[4, 4]
	],
	[
		[4, 4],
		[4, 4]
	],
	[
		[4, 4],
		[4, 4]
	],
	[
		[4, 4],
		[4, 4]
	]
];

// S
const s_block = [
	// 0 degrees
	[
		[0, 5, 5],
		[5, 5, 0]
	],
	// 90 degrees
	[
		[5, 0],
		[5, 5],
		[0, 5]
	],
	// 180 degrees
	[
		[0, 5, 5],
		[5, 5, 0]
	],
	// 270 degrees
	[
		[5, 0],
		[5, 5],
		[0, 5]
	]
];

// Z
const z_block = [
	[
		[6, 6, 0],
		[0, 6, 6]
	], // Initial rotation
	[
		[0, 6],
		[6, 6],
		[6, 0]
	], // 90-degree rotation
	[
		[6, 6, 0],
		[0, 6, 6]
	], // 180 degree rotation
	[
		[0, 6],
		[6, 6],
		[6, 0]
	] // 270-degree rotation
];

// T
const t_block = [
	[
		[0, 7, 0],
		[7, 7, 7]
	], // Initial rotation
	[
		[7, 0],
		[7, 7],
		[7, 0]
	], // 90-degree rotation
	[
		[7, 7, 7],
		[0, 7, 0]
	], // 180-degree rotation
	[
		[0, 7],
		[7, 7],
		[0, 7]
	] // 270-degree rotation
];

// Define a variable to store the current rotation index
let currentRotationIndex = 0;

function getRandomShape() {
	// Define the available shapes
	const shapes = [
		i_block,
		j_block,
		l_block,
		o_block,
		s_block,
		z_block,
		t_block
	];

	// Choose a random shape from the array
	const randomIndex = Math.floor(Math.random() * shapes.length);
	const selectedShape = shapes[randomIndex];

	// Create a copy of the selected shape's initial rotation
	const initialRotation = selectedShape[0].map((row) => [...row]);

	// Set the current rotation index to 0 (initial rotation)
	currentRotationIndex = 0;

	return initialRotation;
}

let randomShape = getRandomShape();

//colors
const colors = {
	0: "transparent", // Empty square
	1: "rgb(6 182 212)", // I block
	2: "rgb(59 130 246)", // J block
	3: "rgb(249 115 22)", // L block
	4: "rgb(234 179 8)", // O block
	5: "rgb(34 197 94)", // S block
	6: "rgb(239 68 68)", // Z block
	7: "rgb(139 92 246)" // T block
};
