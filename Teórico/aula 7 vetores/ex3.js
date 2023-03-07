let io = require("../../io");

let numeros = [];
let media;
let soma = 0;
for (let i = 0; i < 5; i++) {
  io.write("Digite um numero");
  numeros[i] = io.readFloat();
  soma = soma + numeros[i];
}
media = soma / 5;
io.write("Media = " + media + " soma =" + soma);
io.write("abaixo da media estão: ");
for (let i = 0; i < 5; i++) {
  if (numeros[i] < media) {
    io.write(numeros[i]);
  }
}
