// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1- Esse código cria uma função que converte a variavel meuDinheiro em reais, o usuario informa a cotação do dolar pelo prompt, a função conversorDeMoeda pega o parametro, no caso ele tem 100 dolares e multiplica, retornando ao console o resultado.

// 2- Nesse caso o código cria uma função que informa quanto tu vai ganhar investindo em certo tipo de investimento, a função recebe dois parametros, o tipo e o valor investido,usando um swith case ele compara o tipo de investimento que o teste coloca com o tipo de investimento que eles tem nos dados, caso tenha um igual, ele atribui o valorAposInvestimento ao valor inicial vezes a cotação daquele investimento, retornando diferentes resultados no console para cada tipo e valor investidos.

// 3- No caso 3 o código separa os números de uma lista em pares e impares em listas diferentes. Criando 3 arrays, um com os numeros e outros vazios, ele usa um laço de repetição para passar em cada item do array e fazer a seguinte pergunta, se o resto da divisão por 2 for 0 (um determinante para numeros pares) ele o colocará no array1, caso contrario colocará no array2 usando .push. Nos consoles temos os 3 arrays sendo mostrados.

// 4- O último caso atribui novos valores às variaveis quando a condição for aceita e imprime no console. Temos um array de numeros variados, e duas variaveis com valores iniciais. o for of cria um looping repetindo a função para cada item do array, e assim sendo, sempre que o numero do array inspecionado for menor que a variavel numero1, o valor é atribuido a variavel. E sempre que for menor ao numero2, o valor é atribuido ao mesmo. No final temos a impressão no console das duas variaveis.

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

// 1- for, for of, forEach

// const lista = ["1", "2", "3"]

// for (let i = 0; i < lista.length; i++){
// console.log(lista[i])
// }

// for (numero of lista) {
//     console.log(numero)
// }

// let novaLista = lista.map((item, index, array) => {

//     console.log(item)

// })

// 2-

// a) fasle
// b) true
// c) true
// d) true
// e) false

// 3-

// const quantidadeDeNumerosPares = 3
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// 4- 

// let catetoA = prompt("Insira o primeiro valor")
// let catetoO = prompt("Insira o segundo valor")
// let hipotenusa = prompt("Insira o terceiro valor")

// console.log(Number(catetoA), Number(catetoO), Number(hipotenusa))

// if( catetoA === catetoO && catetoO === hipotenusa) {
//     console.log("triangulo equilatero")

// } else if( catetoA !== catetoO && catetoO !== hipotenusa && catetoA !== hipotenusa) {
//     console.log("triangulo escaleno")
// } else {
//     console.log("triangulo isósceles")
// }

// 5- 

// const num1 = prompt("Insira o primeiro valor")
// const num2 = prompt("Insira o segundo valor")

// if(num1 > num2){
//     console.log("O maior é: ", num1)
// } else if(num2 > num1) {
//     console.log("O maior é: ", num2)
// } else {
//     console.log(num1, " são iguais ", num2)
// }

// if(num1%num2 === 0){
//     console.log(num1, " é divisível por ", num2)
// } else {
//     console.log(num1, "não é divisível por ", num2)
// }

// if(num2%num1 === 0){
//     console.log(num2, " é divisível por ", num1)
// } else {
//     console.log(num2, "não é divisível por ", num1)
// }

// let diferenca1 = num1 - num2
// let diferenca2 = num2 - num1

// if(diferenca1 > 0) {
//     console.log("A diferença entre eles é: ", diferenca1)
// } else if(diferenca2 > 0) {
//     console.log("A diferença entre eles é: ", diferenca2)
// } else {
//     console.log("Eles são iguais")
// }

// EXERCÍCIOS DE FUNÇÕES

// 1-

// let arrayNumeros = [80, 3, 5, 45, 13, 115, 1]


// let maioresEmenores = () => {

//     let menor = Infinity
//     let maior = 0

//     for(let i = 0; i < arrayNumeros.length; i++) {

//         if(arrayNumeros[i] < menor){
//         menor = arrayNumeros[i]
//         }

//         if(arrayNumeros[i] > maior){
//         maior = arrayNumeros[i]
//         }
//     }
    
//     arrayNumeros.splice(arrayNumeros.indexOf(menor), 1)

//     arrayNumeros.splice(arrayNumeros.indexOf(maior), 1)

     
//     return arrayNumeros
// }
// maioresEmenores(arrayNumeros)


// let menorEmaiorFinal = () => {

    
//     let menor = Infinity
//     let maior = 0

//     for(let i = 0; i < arrayNumeros.length; i++) {

//         if(arrayNumeros[i] < menor){
//         menor = arrayNumeros[i]
//         }

//         if(arrayNumeros[i] > maior){
//         maior = arrayNumeros[i]
//         }
//     }
    
//      console.log(menor, maior)
// }

// menorEmaiorFinal(arrayNumeros)


// 2-

// let hello = () => {
//     alert("Hello Labenu!");
// }

// hello()

// EXERCÍCIOS DE OBJETOS

// 1- Arrays são listas onde podem ter números e palavras tudo misturado, onde podemos acessar cada item pela posição dele na lista. Objetos são listas mais humanizadas, onde cada item recebe uma etiqueta com um nome que faça sentido no mundo real pro programador e pra qualquer um que leia o programa, no objeto podemos ter arrays. Usamos array quando queremos usar alguma das funções de arrray como map, filter e forEach, que facilitam demais nossa vida. Ja o objeto é pra algo um pouco mais complexo, mas com mais organização, ja que podemos organizar várias listas (array) dentro dele.

// 2

// let criaRetangulo = (lado1,lado2) => {

//     let info = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * lado1 * lado2,
//         area: lado1 * lado2
//     }

//     console.log(info)
// }

// criaRetangulo(5, 10)

// 3

// let filmeFavorito = {
//     titulo: "Inception",
//     ano: 2010,
//     diretor: "Christopher Nolan",
//     atores: ["Leonardo DiCaprio", "Elliot Page"]
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}!`)

