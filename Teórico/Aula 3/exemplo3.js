let io = require("../../io")

/* este programa calcula as raizes cubica que de um numeor que o suario fornecer */

let num 
let raiz 

io.write("Digite um numero")
num = io.readFloat()
raiz = num **(1/3)
io.write("A raíz cubica é:" +raiz)