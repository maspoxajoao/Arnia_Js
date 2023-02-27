let io = require("../io")

io.write('Digite o valor de a: ');
const a = io.readFloat()
io.write('Digite o valor de b: ');
const b = io.readFloat()
io.write('Digite o valor de c: ');
const c = io.readFloat()

const delta = b ** 2 - 4 * a * c;

if (delta < 0) {
  io.write('A equação não possui raízes reais');
} else if (delta === 0) {
  const raiz = -b / (2 * a);
  io.write(`A equação possui uma raiz real: ${raiz}`);
} else {
  const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
  const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
  io.write(`A equação possui duas raízes reais: ${raiz1} e ${raiz2}`);
}