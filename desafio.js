function tabuada () {
console.log("Tabuada do 1");

for(let t=1; t<=10; t++) {
console.log(t)
};
}

tabuada()


function mostrarTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
      const total = numero * i;
      console.log(`${numero} x ${i} = ${total}`); // Template string
    }
  }
  
  mostrarTabuada(1);
