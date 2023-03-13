let io = require("../../io"); 

u = ["Brasil", "Mexico", "Argentina", "Bolivia"];
function f (elem){
    return elem +" América"
}

let novoVetor = u.map(f)

io.write(u)
io.write(novoVetor)