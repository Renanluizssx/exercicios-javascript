const nomes = ["Dani", "Dan", "Jessy", "Renan"]; // Vetor = Array

nomes.map((nomeDaVez) => {
  // Mapeia as posicoes da fila LOOP
  console.log(nomeDaVez);
});
//map 
let numbers = [1, 4, 5, 9, 14, 23]
let doublenumers = numbers.map (num => num * 2)

//map 
const numeros = [2, 3, 6, 5, 10]
//map sempre vai retornar um novo array
let novoarray = numeros.map(function(numero) {
  return numero * 2;
})
console.log(novoarray);

