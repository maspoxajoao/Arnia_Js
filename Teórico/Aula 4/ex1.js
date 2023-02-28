let io = require("../../io");

let nomePais = "";
io.write("Digite um nome de um pais:");
nomePais = io.read();
if (nomePais == "Brasil") {
  io.write("Gigante pela sua prépria natureza");
}
io.write("Obrigado");
