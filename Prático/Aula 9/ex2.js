let io = require("../../io");
let nomes = [];
for (let i = 0; i < 6; i++) {
  io.write("Digite um nome: ");
  let nome = io.read();
  nomes.push(nome);
}

nomes.sort();

io.write("A ordem alfabetica é; ");
for (let i = 0; i < nomes.length; i++) {
  io.write(nomes[i]);
}
