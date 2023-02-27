let io = require("../../io")
let anosFumando
let cigarrosPorDia
let precoDoMaco
let valorGastoTotal

io.write("Digite o número de anos que você fuma: ")
anosFumando = io.readInt()

io.write("Digite o número de cigarros que você fuma por dia: ")
cigarrosPorDia = io.readInt()

io.write("Digite o preço do maço de cigarro: ")
precoDoMaco = io.readFloat()

valorGastoTotal = ((cigarrosPorDia * 365) / 20) * precoDoMaco * anosFumando

io.write("Você gastou um total de R$ " + valorGastoTotal.toFixed(2) + " com seu vício em cigarros.")