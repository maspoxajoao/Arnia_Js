let io = require("../../io");
function funCal() {
  io.write("Digite um numero:");
  let base = io.read();
  io.write("Digite o expoente: ");
  let expoente = io.read();

  let res = 1;

  for (let i = 0; i < expoente; i++) {
    res *= base;
  }
  return res;
}
io.write(funCal());
