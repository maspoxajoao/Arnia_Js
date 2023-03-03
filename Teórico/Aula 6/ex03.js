let io = require("../../io");

let count = 0;

for (let i = 1; i <= 10; i++ ) {
    io.write(`Digite o nome da ${i}ª pessoa:`);
    let nome = io.read()
    if(nome === "maria"){
        count++
    }
}
io.write(`Foram digitados 10 nomes, sendo ${count} chamando maria`)