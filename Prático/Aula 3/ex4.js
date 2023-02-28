let io = require("../../io");

let a;
let b;
let c;
let delta 

console.log("Digite o valor de A:");
a = io.readInt();
console.log("Digite o valor de B:");
b = io.readInt();
console.log("Digite o valor de C:");
c = io.readInt();
delta = b ** 2 - (4 * a * c);
if (delta < 0) {
    console.log("A equação não tem raízes reais.");
  } else if (delta === 0) {
    const raiz = -b / (2*a);
    io.write(`A equação tem uma raiz real: ${raiz}`);
  } else {
    const raiz1 = (-b + delta **1/2) / (2*a);
    const raiz2 = (-b - delta **1/2) / (2*a);
    io.write(`A equação tem duas raízes reais: ${raiz1} e ${raiz2}`);
  }