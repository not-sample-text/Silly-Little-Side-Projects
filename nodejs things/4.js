(() => {
	const prompt = require("prompt-sync")();
	let i,
		prime_flag = 0;
	const input = prompt("Baga numar > ");
	const num = parseInt(input);

	if (isNaN(num)) console.log("Numar invalid.");
	else if (num === 0 || num === 1) prime_flag = 1;

	for (i = 2; i < num / 2; i++) {
		if (num % i == 0) {
			prime_flag = 1;
			break;
		}
	}

	if (!prime_flag) console.log("prim");
	else console.log("nu prim");
})();
