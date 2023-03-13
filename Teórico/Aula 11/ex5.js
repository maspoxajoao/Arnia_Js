let io = require("../../io");

u = ["Brasil", "Mexico", "Argentina"];

function f(elem) {
  io.write(elem);
}
function paraCadaUm(cb) {
  for (let i = 0; i < 3; i++) {
    cb(u[i]);
  }
}

paraCadaUm(f);
