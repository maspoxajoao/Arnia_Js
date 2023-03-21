let io = require("../../io");

let n = 0;
console.log("Digite um numeor")
n = io.read()
while (n < 10) {
  n = n + 1;
  console.log(n);
}
