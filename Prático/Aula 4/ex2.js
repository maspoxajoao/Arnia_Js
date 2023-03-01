let io = require("../../io");

let soma = 0;
let media = 0;
let contador = 0;

while (contador < 50) {
  io.write(`Escreva 50 numeros`);
  let nums = io.readFloat();
  media = media + nums;
  contador++
}

soma = media / 5
io.write(`à media é ${soma}`)


