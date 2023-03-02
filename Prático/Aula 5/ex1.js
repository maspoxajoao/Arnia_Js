let io = require("../../io");

console.log("Digite o numeor de eleitores:");
let totalEleitores = io.read();
console.log("Digite o numero de votos em branco");
let votosBrancos = io.read();
console.log("Digite o numero votos nulos");
let votosNulos = io.read();
console.log("Digite o numero de votos validos:");
let votosValidos = io.read();

let perBranco = (votosBrancos / totalEleitores) * 100;
let perNulos = (votosNulos / totalEleitores) * 100;
let perValidos = (votosValidos / totalEleitores) * 100;

console.log( ` o percentual de votos é ${perBranco}% em branco, ${perNulos}% em nulos, ${perValidos}% em validos`);
