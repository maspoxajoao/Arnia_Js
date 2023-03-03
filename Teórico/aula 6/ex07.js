let io = require("../../io");

let maiorIdade = 0;
let somaAltura = 0;

for (let i = 1; i <= 5; i++) {
  io.write(`digite a idade da ${i}ª pessoa:`);
  let idade = io.readInt();
  io.write(`digite a altura da ${i}ª pessoa:`);
  let altura = io.readFloat();
  if(idade>maiorIdade){
    maiorIdade = idade;
  }
  somaAltura += altura
}

let mediaAltura = somaAltura / 5;
io.write(`A maior idade digitada foi; ${maiorIdade}`);
io.write(`A media das alturas digitada foi; ${mediaAltura}`);


