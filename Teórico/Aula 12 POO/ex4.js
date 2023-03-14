// definindo um objeto em tempo de execução
let io = require("../../io");

class Pessoa {
  cpf;
  nome;
  sexo;
  anoNacimento;
  idade() {
    return 2023 - this.anoNacimento;
  }
}
v = [];
for (let i = 0; i < 3; i++) {
  let pessoa = new Pessoa();
  io.write("Digite o nome da pessoa");
  pessoa.nome = io.read();
  io.write("Digite o CPF da pessoa");
  pessoa.cpf = io.read();
  v[i] = pessoa;
}
console.log(v)