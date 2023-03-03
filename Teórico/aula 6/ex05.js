let io = require("../../io");

console.log("Digite um numero: ");
let n = io.readInt();

for( let i = 2; i <= n; i+=2){
    io.write(i)
}