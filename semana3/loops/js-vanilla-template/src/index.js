// EXERCÍCIO 1

// o código cria uma variavel de valor igual a zero, e estabelece um laço. enquanto o i for menor que 5, valor vai incrementar i. No caso i começa em 0, mas a cada ciclo ele aumentará 1. No final teremos no console 4.

// EXERCÍCIO 2

// 19 , 21, 23, 25, 27, 30. Teria que criar um for of para indice of number.

// EXERCÍCIO 3

// let arrayOriginal = [0, 1, 2, 3, 4, 5]

// a

// console.log(arrayOriginal)

// b

// for (let numero of arrayOriginal)

// console.log(numero/10)

// c

// for (let numero of arrayOriginal) {
//     numDividido = numero%2

//     if(numDividido === 0) {
//         console.log(numero)
//     }
// }

// d 

// let frase = ""

// for (let i = 0; i <= 6; i++) {
//     frase = frase + "O elemento do index " + i + " é " + arrayOriginal[i]

//     console.log(frase)
// }

// e

// let maior = -999999999999
// let menor =  999999999999

// for (numero of arrayOriginal) {
    
//     if(numero > maior){
//         maior = numero
//     }
    
//     if(numero < menor) {
//         menor = numero
//     }
// }

// console.log(maior, menor)
 
// DESAFIO 1 

// let numeroDaSorte = Number(prompt("Insira o seu numero da sorte!"))
// console.log("Vamos jogar!")

// let meuChute =! numeroDaSorte
// let tentativas = 1

// while (meuChute != numeroDaSorte) {

//     meuChute = Number(prompt("Tente adivinhar o meu número da sorte"))

//     console.log("O número chutado foi: ", meuChute)

// if(meuChute === numeroDaSorte) {

//     console.log("Acertou em ", tentativas)

// } else if(meuChute > numeroDaSorte) {

//     console.log("Errou. O número escolhido é menor")

// } else {

//     console.log("Errou. O número escolhido é maior")
// }

//  tentativas++
// }


// DESAFIO 2

// let numeroDaSorte =  Math.floor((Math.random() * 100) + 1);
// console.log("Vamos jogar!")

// let meuChute =! numeroDaSorte
// let tentativas = 1

// while (meuChute != numeroDaSorte) {

//     meuChute = Number(prompt("Tente adivinhar o meu número da sorte"))

//     console.log("O número chutado foi: ", meuChute)

// if(meuChute == numeroDaSorte) {

//     console.log("Acertou em ", tentativas)

// } else if(meuChute > numeroDaSorte) {

//     console.log("Errou. O número escolhido é menor")

// } else {

//     console.log("Errou. O número escolhido é maior")
// }

//     tentativas++
// }

// O desafio dois não foi tão difícil porque eu basicamente só troquei o valor que o usuário colocava pela fórmula de randomização de números.