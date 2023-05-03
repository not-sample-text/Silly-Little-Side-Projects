/**
 int
main ()
{
    int note[50], i, sum = 0, length_arr;
    float medie;

    printf("(Pentru a termina introdu 0)");

    for (i = 0; i < 50; i++)
    {
        printf ("\nIntrodu nota nr %d: ", i + 1);
        scanf ("%d", &note[i]);

        sum += note[i];

        if (note[i] == 0)	break;
    }

    length_arr = i;

    medie = (float) sum / length_arr;

    printf ("%3.2f", medie);

    return 0;
}
 */

(() => {
	const prompt = require("prompt-sync")();

	const note = [];
	let i = 0,
		sum = 0,
		length_arr = 0;
	let medie = 0.0;

	console.log("(Pentru a termina introdu 0)");

	while (i < 50) {
		const input = prompt(`Introdu nota nr ${i + 1}: `);
		const num = parseInt(input);

		if (num === 0) {
			length_arr = i;
			medie = sum / length_arr;
			console.log(`Media: ${medie.toFixed(2)}`);

			break;
		} else if (isNaN(num)) {
			console.log("Introduceti un numar valid.");
		} else {
			note[i] = num;
			sum += note[i];
			i++;
		}
	}

	if (i === 50) {
		console.log("Ai introdus deja 50 de note.");
	}
})();
