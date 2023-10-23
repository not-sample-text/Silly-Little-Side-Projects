// I
const i_block = [[1, 1, 1, 1]];
// J
const j_block = [
	[2, 2, 2],
	[0, 0, 2]
];
// L
const l_block = [
	[3, 3, 3],
	[3, 0, 0]
];
// O
const o_block = [
	[4, 4],
	[4, 4]
];
// S
const s_block = [
	[0, 5, 5],
	[5, 5, 0]
];
// Z
const z_block = [
	[6, 6, 0],
	[0, 6, 6]
];
// T
const t_block = [
	[0, 7, 0],
	[7, 7, 7]
];

// Define a function to get a random shape
let lastRandomShape = null;

function getRandomShape() {
	let newRandomShape;

	// Continue generating a new shape until it's different from the last one
	do {
		const shapes = [
			i_block,
			j_block,
			l_block,
			o_block,
			s_block,
			z_block,
			t_block
		];
		const randomIndex = Math.floor(Math.random() * shapes.length);
		newRandomShape = shapes[randomIndex];
	} while (JSON.stringify(newRandomShape) === JSON.stringify(lastRandomShape));

	// Update lastRandomShape
	lastRandomShape = newRandomShape;

	return newRandomShape;
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
