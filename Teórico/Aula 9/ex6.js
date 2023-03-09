let io = require("../../io");

function divisao(a, b) {
  let vetor = []
  let quociente = 0
  let resto = a
  while (resto >= b) {
    resto -= b
    quociente++
  }
  vetor.push(quociente)
  vetor.push(resto)
  return vetor
}

let a = io.readInt()
let b = io.readInt()

let resultado = divisao(a, b)

io.write("O quociente é: " + resultado[0])
io.write("O resto é: " + resultado[1])