let io = require("../../io");

console.log("Digite o salario atual do funcionario:");
let salarioAtual = io.readFloat();
console.log("Digite a porcentagem do reajust:");
let porcentagemS = io.readFloat()

let valorAumento = (porcentagemS / 100) * salarioAtual;
let novoS = salarioAtual + valorAumento;
console.log(`Nono salario: R$ ${novoS}`);