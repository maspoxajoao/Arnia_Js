let io = require("../../io");
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  idade1() {
    return this.idade >= 18;
  }
}

let pessoa1 = [];
for (let i = 0; i < 10; i++) {
  io.write("Digite o nome da pessao:");
  let nome = io.read();
  io.write("Digite a sua idade:");
  let idade = io.readInt();
  let pessoa = new Pessoa(nome, idade);
  pessoa1.push(pessoa);
}
let maiorIdade = pessoa1.filter((pessoa) =>pessoa.idade1());
io.write(maiorIdade);
