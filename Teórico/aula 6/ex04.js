let io = require("../../io");

console.log("Digite um numero: ");
let n = io.readInt();

for (let i = 1; i <= n; i++) {
  io.write(i);
}
io.write("obrigado");
