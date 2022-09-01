
function mostrarTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
      const total = numero * i;
      console.log(`${numero} x ${i} = ${total}`); // Template string
    }
  }
  
  mostrarTabuada(1);
