class pessoa {
  cpf;
  nome;
  sexo;
  anoNacimento;
  idade() {
    return 2023 - this.anoNacimento;
  }
}


let pessoa1 = new pessoa();
pessoa1.cpf = "740.307.306.00";
pessoa1.nome = "Marcio Silva";
pessoa1.anoNacimento = 1968;
console.log(pessoa1.idade())
console.log(pessoa)
console.log(pessoa1.nome)
console.log(pessoa1)
