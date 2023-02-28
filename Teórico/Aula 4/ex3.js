let io = require("../../io");

let num;
io.write("Digite um número inteiro");
num = io.readInt();
if (num % 2 == 0) {
  io.write("Este numero é par");
} else {
  io.write("Este numero é impar");
}
