let io = require("../../io");

let N1;
let N2;

console.log("Digite um numero:");
N1 = io.read();
console.log("Digite um numero:");
N2 = io.read();

if (N1 > N2) {
  console.log(`${N1} é maior do que ${N2}`);
} else {
  console.log(`${N2} é maior do que ${N1}`);
}
