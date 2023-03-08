let io = require("../../io");

function CategoriaNadador(){
    io.write("Digite a idade do nadador:")
    let idade =io.read()

    if (idade >= 5 && idade<= 7){
      return "Infatil A"
    } else if ( idade >= 8 && idade <=10){
        return "infantil B"
    } else if ( idade >= 11 && idade <= 13){
        return "Juvenil A"
    } else if ( idade >= 14 && idade <= 17){
        return "Juvenil B"
    } else if (idade >=18){
        return "Adulto"
    } else {
        return "lucas e chato demais"
    }
}
io.write(`A categoria do nadaod é : ${CategoriaNadador()}`)