let io = require("../../io");

let numeros = [];
for (let i = 0; i < 10; i++) {
  io.write("Digite um numero: ");
  let numero = io.readInt();
  numeros.push(numero);
}

numeros.sort(function (a, b) {
  return a - b;
});

io.write("A ordem crescente é: ");
for (let i = 0; i < numeros.length; i++) {
  io.write(numeros[i]);
}
function ordenarVetor(vetor, ordem) {
  let vetorOrdenado = [];
  for (let i = 0; i < vetor.length; i++) {
    vetorOrdenado[i] = vetor[i];
  }
  if (ordem === "D") {
    vetorOrdenado.sort().reverse();
  } else {
    vetorOrdenado.sort();
  }
  return vetorOrdenado
}
 io.write(`Os numeros ordenados crescente são ${ordenarVetor(numeros, "D")}`)