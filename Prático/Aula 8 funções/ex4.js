let io = require("../../io");


let valor
function funPar(valor) {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

io.write("Digite o numero");
valor = io.readFloat();
io.write(funPar(valor));