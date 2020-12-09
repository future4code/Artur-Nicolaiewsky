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

//  console.log("Bem vindo ao jogo Blackjack!!")

//  if(confirm("Quer iniciar uma nova rodada?")) {

//    const cartaUm = comprarCarta();
//    const cartaDois = comprarCarta();
//    const cartaTres = comprarCarta();
//    const cartaQuatro = comprarCarta();

//    let somaUsuario = cartaUm.valor+cartaDois.valor
//    let somaComputador = cartaTres.valor+cartaQuatro.valor

//    // jogador 1

//    console.log("Usuário - cartas: ", cartaUm.texto , cartaDois.texto , " - pontuação ", somaUsuario)

//    // jogador 2
   
//    console.log("Computador - cartas: ", cartaTres.texto , cartaQuatro.texto , " - pontuação ", somaComputador)

//    if(somaUsuario === somaComputador) {

//       console.log("Empate!")

//    } else if(somaUsuario > somaComputador) {

//       console.log("O usuário ganhou!")

//    } else {

//       console.log("O computador ganhou!")

//    }

//  } else {
//     console.log("O jogo acabou:(")
//  }