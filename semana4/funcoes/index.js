// EXERCÍCIO 1

// 1) No console será impresso 10 e 50 respectivamente. 
// b) Se retirasse os console.log a conta seria feita, porém nada apareceria pro usuário.

// EXERCÍCIO 2

// No for podemos ver que a repetição terá 2 ciclos, cada um com um console log imprimindo um item do array, nesse caso imprimiriam Darvas e Caio respectivamente.
// Amanda e Caio

// EXERCÍCIO 3
// Pra cada número par do array, ele vai adicionar o número elevado ao quadrado no arrayFinal. Então acho que o melhor nome seria numerosParesAoQuadrado

// EXERCÍCIO 4

// a)

// function frase(){
//     console.log("Eu sou Artur, tenho 21 anos, moro em São Paulo e sou estudante.")

// }

// frase()

// b)

// let nome = prompt("Insira seu nome")
// let idade = Number(prompt("Insira sua idade"))
// let cidade = prompt("Insira sua cidade")

// let estudante = ""

// if(confirm("Você é um estudante?")){
//     estudante = "sou"
// } else {
//     estudante = "não sou"
// }


// function frase(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)

// }

// frase()

// EXERCÍCIO 5

// a)

// let soma = (num1,num2) => {
//     let resultado = num1 + num2
//     console.log(resultado)
// }

// soma(3, 5)

// // b)

// let comparaNumeros = (num1,num2) => {
//     let compara = num1 >= num2
//     console.log(compara)
// }

// comparaNumeros(6, 5)

// c)

// function impressora10(mensagem) {
//     for(i=0; i<10; i++){
//         console.log(mensagem)
//     }
// }

// impressora10(prompt("Mande uma mensagem 10 vezes"));

// EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a)

// let itemsNoArray = (array) => {
//     let quantidade = array.length
//     console.log(quantidade)
// }

// itemsNoArray(array)

// b)

// function pares(num1) {
//     if(num1 % 2 === 0){
//         console.log( true )
//     } else {
//         console.log( false)
//     }
// }

// pares(2)

// c)

// let paresNoArray = (array) => {
//     for( x of array) {
//       if(x % 2 === 0){
//           console.log(true)
//       } else { 
//           console.log(false) }
//     }
// } 

// paresNoArray(array)

// let paresNoArray2 = (array) => {
//     for(x of array) {
//         pares(x)
//     }
// }

// paresNoArray2(array)