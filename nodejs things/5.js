(() => {
	const prompt = require("prompt-sync")();

	function decToBase(num, base) {
		return num.toString(base);
	}

	const input = prompt("baga numar > ");
	const num = parseInt(input);

	const choice = prompt("baga baza > ");
	const base = parseInt(choice);
	if (base < 2 || base > 36) {
		console.log("baza invalida");
		return;
	}
	console.log(
		`numarul decimal ${num} in baza ${base} este ${decToBase(num, base)}`
	);
})();
