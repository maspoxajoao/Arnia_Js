let io = require("../../io");

let vetNomes = [];
for (let i = 0; i < 5; i++) {
  io.write("Digite um nome");
  vetNomes[i] = io.read();
}

io.write("Os nomes digitados foram");
for (let i = 0; i < 5; i++) {
  io.write(vetNomes[i]);
}
