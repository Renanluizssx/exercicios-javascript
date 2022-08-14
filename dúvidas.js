//map sempre vai retornar um novo array

let numeros = [1, 2, 3, 4 ]

let novoarray = numeros.map(function retornavalor(numero) {
    return numero * 2;
  })
  console.log(novoarray);
  
  const nomes = ["Dani", "Dan", "Jessy", "Renan"]; // Vetor = Array

nomes.map((nomeDaVez) => {
  // Mapeia as posicoes da fila LOOP
  console.log(nomeDaVez);
}