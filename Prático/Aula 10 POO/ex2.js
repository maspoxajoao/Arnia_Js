let io = require("../../io");
//Faça um programa para receber nome e idade de 10 pessoas e depois imprimir em ordem de nome.
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
let pessoas = [];

for (let i = 0; i < 2; i++) {
  io.write("Digite o nome");
  let nome = io.read();
  io.write("idade");
  let idade = io.read();
  let pessoa = new Pessoa(nome,idade)
  pessoas.push(pessoa);
}
let receber = pessoas.sort((a, b) => {
  if (a.nome < b.nome) {
    return -1;
  }
  if (a.nome > b.nome) {
    return 1;
  }
  return 0;
});

io.write(receber)