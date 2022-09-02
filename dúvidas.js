// função
function somar(n1, n2) {
    return n1 + n2
}

console.log(somar(2, 5))

// arrow function
let soma = (n1, n2) => n1 + n2

console.log(soma(5, 7))

// duplicar valores com map
valores = [9, 6, 4, 2]
let novovalores = valores.map(function duplicarvalores(numero) {
    return numero*2
})

console.log(novovalores)


