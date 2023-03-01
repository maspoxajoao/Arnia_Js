let n1 = 0;
let n2 = 1;
let n3 = 0;

while (n3 < 50) {
  console.log(n2);
  let n = n1 + n2;
  n1 = n2;
  n2 = n;
  n3++;
}
