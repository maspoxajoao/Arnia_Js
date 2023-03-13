let io = require("../../io");
//metodo filter que retorna

v = [21, 34, 45, 56, 78];

function f(n) {
  return n % 2 == 0;
}
let w = v.filter(f);

io.write(v)
io.write(w)