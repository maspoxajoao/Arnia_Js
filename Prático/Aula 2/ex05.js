let io = require("../../io");

var n1;
var n2;
var res;

io.write("Digite um número: ");
n1 = io.readInt();
io.write("Digite outro número: ");
n2 = io.readInt();
res = (n1 + n2) / 2;
io.write("A media é: " + res.toFixed(2));
