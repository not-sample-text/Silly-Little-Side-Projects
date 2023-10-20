const table = new Array(ROWS);

for (let i = 0; i < ROWS; i++) {
	table[i] = new Array(COLUMNS).fill(0);
}

console.table(table);
