// programa para somar dois numeros
// exemplo de função com retorno
let io = require("../../io");
let num1, num2, operacao, resultado;

function soma(n1, n2) {
  let s;
  s = n1 + n2;
  return s;
}

function produto(n1, n2) {
  let p;
  p = n1 * n2;
  return p;
}
function divisor(n1, n2) {
  let d;
  d = n1 / n2;
  return d;
}

io.write("Digite um numero");
num1 = io.readFloat();
io.write("Digite um numeor");
num2 = io.readFloat();
io.write("Digite uma operação");
operacao = io.read();

if (operacao === "+") {
  resultado = soma(num1, num2);
}
if (operacao === "*") {
  resultado = produto(num1, num2);
}
if (operacao === "/") {
  resultado = divisor (num1, num2);
}
io.write(resultado);
