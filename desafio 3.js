// if tenário
function personagemMorreu(dano, saude) {
    return saude < dano // CONDICAO
    ?  console.log("Personagemmorreu") // SE (IF)
    : console.log("Personagem está vivo"); // SENAO (ELSE)
    }
   personagemMorreu(9, 2)


function maiormenor (maior, menor) {
    return maior > menor
    ? console.log('O número é maior')
    : console.log('O número é menor')
}

maiormenor(9, 10)
   