let io = require("../../io");

console.log("Digite a temperatura em graus Fahrenheit:");
let tempF = io.readFloat();
let tempC = ((tempF - 32) / 9) * 5;

console.log(`A temperatura em graus celsius é: ${tempC}`)
