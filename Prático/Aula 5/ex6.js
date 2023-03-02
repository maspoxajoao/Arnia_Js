let io = require("../../io");

console.log("Digite o primeiro numero:");
let n1 = io.readFloat();
console.log("Digite o segundo numero:");
let n2 = io.readFloat();
console.log("Digite o terceiro numero:");
let n3 = io.readFloat();

let maior = n1

if(n2 > maior){
    maior = n2
}

if (n3 > maior)(
    maior = n3
)

console.log(`O maior numero é: ${maior}`)