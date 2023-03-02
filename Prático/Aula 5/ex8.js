let io = require("../../io");

console.log("Digite um numero:");
let n1 = io.readInt();

for (let n2 = 1; n2 <= n1; n2++) {
  if (n2 % 2 === 0) {
    console.log(`${n2} - par`);
  } else {
    console.log(`${n2} - impar`);
  }
}
