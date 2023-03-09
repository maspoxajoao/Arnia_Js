let io = require("../../io");

let vet = []
let n = io.readInt()


function vetreverse (){
    for(i = 0 ; i < n ; i++){
        vet[i] = io.readInt()
    }
    vet.reverse()
    return vet

}

io.write(vetreverse())
