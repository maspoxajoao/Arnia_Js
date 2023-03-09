
let io = require("../../io");
let soma = 0;
let quantidade = 0;

function funCal() {
  let valor = 0;

  while (valor >= 0) {
    io.write("digite a nota, ou -1 para encerrar;");
    valor = io.readFloat();

    if (valor >= 0) {
      soma += valor;
      quantidade++;
    }
  }
  if (quantidade === 0) {
    return 0;
  } else {
    return soma / quantidade;
  }
}

console.log(`A media dos alunos é ${funCal()}`);