let io = require("../../io");
class Pessoa {
  cpf;
  nome;
  sexo;
  anoNascimento;
  constructor(nome, sexo) {
    this.nome = nome;
    this.sexo = sexo;
  }
  idade() {
    return 2023 - this.anoNascimento;
  }
}

let pessoa = new Pessoa("Maria", "F");
console.log(pessoa);
