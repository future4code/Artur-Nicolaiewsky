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

   let pergunta = ["Suas cartas são " + usuarioArray[0].texto + " " + usuarioArray[1].texto + " " + ". A carta revelada do computador é " + computadorArray[0].texto + "." +
   "\n" + "Deseja comprar mais uma carta?"]

   while(somaUsuario < 21 && confirm( pergunta )) {

         usuarioArray.push(comprarCarta())
         somaUsuario = Number(somaUsuario) + Number(usuarioArray[i].valor)
         pergunta.splice(4, 0, usuarioArray[i].texto, " ")
         i++
   }

   somaUsuario = Number(somaUsuario)

   i=2  

   while(somaComputador < 20 && somaUsuario < 21) {
         computadorArray.push(comprarCarta())
         somaComputador = Number(somaComputador) + Number(computadorArray[i].valor)
         i++
   }

   somaComputador = Number(somaComputador)


  // jogador 1

  console.log("Usuário - cartas: ", usuarioArray[0].texto , usuarioArray[1].texto , " - pontuação ", somaUsuario)

  // jogador 2
  
  console.log("Computador - cartas: ", computadorArray[0].texto , computadorArray[1].texto , " - pontuação ", somaComputador)

  if(somaUsuario === somaComputador) {

     console.log("Empate!")

  } else if(somaUsuario > somaComputador < 21 && somaUsuario < 22 ) {

     console.log("O usuário ganhou!")

  } else if (22 > somaUsuario < somaComputador && somaComputador < 22){

     console.log("O computador ganhou!")
     
  }


} else {
   console.log("O jogo acabou:(")
}

