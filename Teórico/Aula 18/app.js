const soma = await 2+1
console.log(soma)

async function(){
    try{
        const resultadoDaApi = await fetch('')
        console.log(resultadoDaApi)
    } catch(error){
        console.log(error.statusCode)
    }
}