let v = [7, 5, 8, 4, 2, 1];
let aux;
for (let j = 0; j < 5; j++) {
  for (let i = 0; i < 5; i++) {
//Se mudar o > por < fica em ordem decrescente
    if (v[i] > v[i + 1]) {
      aux = v[i];
      v[i] = v[i + 1];
      v[i + 1] = aux;
    }
  }
}
console.log(v);
