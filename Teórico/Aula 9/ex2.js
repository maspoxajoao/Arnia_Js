let io = require("../../io");
let numero = [];
let soma = 0
function somaNum() {
  io.write("Digite o numero de vetores");
  let n1 = io.readInt();

  for (let i = 0; i < n1; i++) {
    io.write("Digite um numero");
    let n2 = io.readInt();
    numero.push(n2);
  }

  for (let i = 0; i < numero.length; i++) {
    soma += numero[i];
  }
  return soma;
}

io.write(somaNum());
