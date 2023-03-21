//Soma os numeros de 1 ate n, sendo n o numeor digitado pelo ususario

let io = require("../../io");

let n = 0;
let acumulador = 0;
let contador = 1;

console.log("Digite um numeor");
n = io.read();
while (contador <= n) {
  acumulador = acumulador + contador;
  contador = contador + 1;
}
console.log(acumulador);
