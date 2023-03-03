let io = require("../../io");

console.log("Digite um numero natural: ");
let n = io.readInt();

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    io.write(i);
  }
}
