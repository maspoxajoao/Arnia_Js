let io = require("../../io");

let n = 0;
let countet = 1;
let frase;

console.log("Digite um numeor");
n = io.read();
console.log("Digite um frase: ");
frase = io.read();

while (countet < n) {
  console.log(frase);
  countet++;
}
