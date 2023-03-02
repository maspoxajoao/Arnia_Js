let io = require("../../io");

let uCerto = "usuario";
let sCerto = "123456";

console.log("Digite o login:");
let login = io.read();
console.log("Digite a Senha:");
let senha = io.read();

if (login === uCerto && senha === sCerto) {
  console.log("Bem vindo");
} else {
  console.log("Dados invalidos");
}
