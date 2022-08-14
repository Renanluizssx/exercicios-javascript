function tabuada() {
    for(i=0; i<=5; i++) {
        let tabua = i*i
        console.log(tabua)
    }
}
function tabuada(numero) {
    for(i=0; i<=10; i++) {
        let ntabuada = numero * i
        console.log(`A tabuada de ${numero} e ${i} é igual a: ${ntabuada}`)
    }
}
tabuada(1)