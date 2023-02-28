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

if (N1 < (N2 + N3)){
    console.log("Eles formam um triangulo")
} else {
    console.log("Eles nao formam um trinagulo")
}