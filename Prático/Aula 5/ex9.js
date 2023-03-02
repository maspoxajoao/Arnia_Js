let io = require("../../io");

let n = 1;
let soma = 0;
let qtd = 0;

while (n != 0) {
  io.write("Digite um numero: ");
  n = io.readFloat();
  soma += n;
  qtd++;
  if (n == 0) {
    let media = soma / qtd;
    io.write(`Foram digitados ${qtd} números e a media é ${media} `);
  }
}
