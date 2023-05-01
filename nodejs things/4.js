/*
  int n, i, prim;
  printf("baga n: ");
  scanf("%d", &n);

  if (n == 0 || n == 1)
      prim = 1;

  for (i = 2; i <= n / 2; ++i)
  {
      if (n % i == 0)
      {
          prim = 1;
          break;
      }
  }

  if (prim == 1)
      printf("%d nu ii prim.", n);
  else
      printf("%d ii prim.", n);

  return 0;
*/

const prompt = require("prompt")();

let i, prim;
