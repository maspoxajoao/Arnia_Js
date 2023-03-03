let io = require("../../io");

console.log("Digite um numero natural:");
let n1 = io.readInt();
let primo = 0;

for (let i = 1; i <= n1; i++) {
  if (n1 % i == 0) {
    primo++;
  }
}

if (primo == 2) {
  io.write(`${n1} e um numero primo`);
} else {
  io.write(`${n1} não é um numero primo`);
}
