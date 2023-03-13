let io = require("../../io");

function media(n1, n2) {
  return (n1 + n2) / 2;
}

let n = media
io.write(n(2,6))
