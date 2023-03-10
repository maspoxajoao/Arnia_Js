let io = require("../../io");

function ordenarVetor(vetor){
    return vetor.sort(function(a,b){
        return a - b
    })
}
 let numeros = []

 for (let i = 0; i < 10; i++) {
    io.write("Digite um numero: ");
    let numero = io.readInt();
    numeros.push(numero);
  }

  let numerosOrdenados = ordenarVetor(numeros)
io.write("Números em ordem crescente: ")
for (let i = 0; i < numerosOrdenados.length; i++) {
    io.write(numerosOrdenados[i])
    
}