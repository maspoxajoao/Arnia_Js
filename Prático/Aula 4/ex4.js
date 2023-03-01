let io = require("../../io");

let n1;
console.log("Digite um numero");
n1 = io.read();

let i = 0;
while (i <= n1) {
  console.log(i);
  i += 5;
}
