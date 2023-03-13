let io = require("../../io");
//exemplo com callback

function saudação(nome) {
  io.write("Ola " + nome);
}

function processaEntrada(cb) {
  io.write("Digite seu nome");
  m = io.read()
  cb(m);
}

processaEntrada(saudação);


//Saudação sem () para ir sem parametro e puxar o cb
// Chama processoEntrada como funcão e a funçtion saudação como parametro