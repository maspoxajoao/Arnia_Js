let io = require("../../io");

function calcularIdade() {
  io.write("Digite quantos anos voce tem:");
  let anos = io.readInt();
  io.write("Digite quantos meses voce tem:");
  let meses = io.readInt();
  io.write("Digite quantos dias voce tem:");
  let dias = io.readInt();

  let  hoje = new Date(); 
  let dataNascimento = new Date(hoje.getFullYear() - anos, hoje.getMonth() - meses, hoje.getDate() - dias); 
  let  diferencaEmMilissegundos = hoje.getTime() - dataNascimento.getTime(); 
  let  diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)); 
  return diferencaEmDias;
}
io.write (calcularIdade())
