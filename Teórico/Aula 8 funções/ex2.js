// programa para somar dois numeros
// exemplo de função sem retorno
let io = require("../../io");
let n1, n2, s;

function soma() {
  s = n1 + n2;
}

io.write("Digite um numero");
n1 = io.readFloat();
io.write("Digite um numeor");
n2 = io.readFloat();
soma()
io.write(`O valor da soma é ${s}`)
