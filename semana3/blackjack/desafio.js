/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo Blackjack!!")

if(confirm("Quer iniciar uma nova rodada?")) {

   let usuarioArray = []
   let computadorArray = []
   let somaUsuario = []
   let somaComputador = []

   usuarioArray.push(comprarCarta())
   usuarioArray.push(comprarCarta())
   computadorArray.push(comprarCarta())
   computadorArray.push(comprarCarta())

   // console.log(usuarioArray[0].texto, usuarioArray[1].texto)
   // console.log(computadorArray[0].texto, computadorArray[1].texto)

   while((usuarioArray[0].valor === 11 && usuarioArray[1].valor === 11) || (computadorArray[0].valor === 11 && computadorArray[1].valor === 11 )) {

   usuarioArray[0] = comprarCarta();
   usuarioArray[1] = comprarCarta();
   computadorArray[0] = comprarCarta();
   computadorArray[1] = comprarCarta();
  
   }

   somaUsuario.push(Number(usuarioArray[0].valor) + Number(usuarioArray[1].valor));
   somaComputador.push(Number(computadorArray[0].valor) + Number(computadorArray[1].valor));

   i=2  

   let pergunta = ["Suas cartas são " , usuarioArray[0].texto , usuarioArray[1].texto , ". A carta revelada do computador é " , computadorArray[0].texto , "." ,
   "\n" , "Deseja comprar mais uma carta?"]

   let respostaUsuario = ["Usuário - cartas: ", usuarioArray[0].texto , usuarioArray[1].texto , " - pontuação ", Number(somaUsuario)]
   let respostaComputador = ["Computador - cartas: ", computadorArray[0].texto , computadorArray[1].texto , " - pontuação ", Number(somaComputador)]

   while(somaUsuario < 21 && confirm( pergunta.join([separador = ' ']) )) {

         usuarioArray.push(comprarCarta())
         pergunta.splice(3, 0, usuarioArray[i].texto)
         respostaUsuario.splice(2, 0, usuarioArray[i].texto)
         respostaUsuario.pop()
         somaUsuario = Number(usuarioArray[0].valor) + Number(usuarioArray[1].valor) + Number(usuarioArray[i].valor)
         respostaUsuario.push(Number(somaUsuario))
         i++
   }

   i=2  

   while(somaComputador < 20 && somaUsuario < 21) {
         computadorArray.push(comprarCarta())
         respostaComputador.pop()
         somaComputador = Number(somaComputador) + Number(computadorArray[i].valor)
         respostaComputador.splice(2, 0, computadorArray[i].texto)
         respostaComputador.push(Number(somaComputador))
         i++
   }

   somaComputador = Number(somaComputador)

  // jogador

  console.log(respostaUsuario.join([separador = ' ']))

  // computador
  
  console.log(respostaComputador.join([separador = ' ']))

  if(somaUsuario === somaComputador) {

     console.log("Empate!")

  } else if(22 > somaUsuario > somaComputador || somaComputador > 22) {

     console.log("O usuário ganhou!")

  } else if ( somaUsuario < somaComputador < 22 || somaUsuario < 22){

     console.log("O computador ganhou!")
     
  } else {
     console.log("bugou")
  }


} else {
   console.log("O jogo acabou:(")
}

