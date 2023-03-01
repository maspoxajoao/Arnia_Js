let io = require("../../io");

console.log("Digite um numero");
let n1 = io.read();

let fatorial = 1;
let i = 2;

while (i <= n1) {
  fatorial *= i;
  i++;
}

console.log(`O fatorial de ${n1} é ${fatorial}`);