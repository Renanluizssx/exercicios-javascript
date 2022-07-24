
function personagemMorreu(dano, saude) {
    return saude < dano // CONDICAO
    ? console.log("Personagem morreu") // SE (IF)
    : console.log("Personagem está vivo"); // SENAO (ELSE)
    }
   personagemMorreu(9, 2)