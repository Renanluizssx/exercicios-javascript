function imparpar() {
    let t=5;
    if (t%2===1) {
    console.log ("O número é ímpar")
    }
    else if (t%2===0) {
    console.log ("O número é par")
    }
    else {
    console.log ("totalmente inválido")
    }
    };
    imparpar()
    
    function indice(number) {
        if (number % 2 == 0) return "par";
        else if (number % 2 !==0) return "impar";
    }
    console.log (indice(3));

    function identificarImparPar(numero = 2) { // Parametros padroes
        if (!numero) { // Se nao tiver numero faca isso
          return null;
        }
        const isPair = numero % 2 === 0;
        return isPair ? "É par" : "É impar"; // Retornando para a variavel de fora
      }
      
      const tipoNumero = identificarImparPar();
      console.log(tipoNumero);