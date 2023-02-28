let io = require("../../io");

let N1
let N2
let N3

console.log("Digite um numero:")
N1 = io.readInt()
console.log("Digite um numero:")
N2 = io.readInt()
console.log("Digite um numero:")
N3 = io.readInt()

if (N1 + N2 > N3 && N1 + N3 > N2 && N2 + N3 > N1) {
    console.log("Os tamanhos formam os lados de um triângulo.");
  } else {
    console.log("Os tamanhos não formam os lados de um triângulo.");
  }