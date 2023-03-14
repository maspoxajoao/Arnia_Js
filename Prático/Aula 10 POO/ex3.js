let io = require("../../io");
//Faça um programa para receber nome e idade de 10 pessoas. Depois faça um método que aumente a idade das pessoas em 1 ano. Use a classe do exercício anterior e inclua nela o método aumentarIdade().

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  aumentarIdade(){
    this.idade++
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
pessoas.forEach(pessoa =>pessoa.aumentarIdade())

io.write(pessoas)