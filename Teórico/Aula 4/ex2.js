let io = require("../../io");

let nomePais = "";
io.write("Digite um nome de um pais:");
nomePais = io.read();
if (nomePais == "Brasil") {
  io.write("Gigante pela sua prépria natureza");
} else {
  io.write("Eu nao moro nesse país");
}
io.write("Obrigado");
