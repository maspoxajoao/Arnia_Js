let io = require("../../io");
let numero = [];
let soma = 0
function mediaUsuario() {
  io.write("Quantos numeros voce quer a media");
  let n1 = io.readInt();

  for (let i = 0; i < n1; i++) {
    io.write("Digite um numero");
    let n2 = io.readInt();
    numero.push(n2);
  }

  for (let i = 0; i < numero.length; i++) {
    soma += numero[i];
  }
  let media = soma / numero.length;
  return media;
}

io.write(mediaUsuario());