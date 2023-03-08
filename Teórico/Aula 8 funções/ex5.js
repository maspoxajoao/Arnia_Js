let io = require("../../io");
let num1, num2;
function leaiNumInteiro(label) {
  let i;
  io.write(label);
  i = io.readInt();
  return i;
}

num1 = leaiNumInteiro("digite um numero");
num2 = leaiNumInteiro("Digite um numero");
io.write(num1 + num2);
