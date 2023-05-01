/*
int main()
{
    int a[50], sum = 0, prod = 1, i;

    for(i = 0; i < 50; i++)
    {
        printf("Baga numaru %d: ", i+1);

        scanf("%d", &a[i]);

        if(a[i]==0) break;

        sum += a[i];
        prod *= a[i];
    }

    printf("\nSuma = %d\n", sum);
    printf("Produs = %d\n", prod);
    return 0;
}
 */

const prompt = require("prompt-sync")();

(() => {
	let i = 0,
		numbers = [],
		sum = 0,
		prod = 1;

	console.log("(Pentru a termina introdu 0)");

	while (true) {
		const input = prompt(`Introdu nr. ${i + 1} > `);
		const num = parseInt(input);

		if (num === 0) {
			break;
		} else if (isNaN(num)) {
			console.log("baga numar valid");
		} else {
			numbers[i] = num;
			sum += numbers[i];
			prod *= numbers[i];
			i++;
		}
	}

	console.log("Suma: ", sum);
	console.log("Produs: ", prod);
})();
