// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) -> RESPOSTA: a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) -> RESPOSTA: b. false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado) -> RESPOSTA: c. true

// console.log("e. ", typeof resultado) -> RESPOSTA: e. boolean


// EXERCÍCIO 1

// const idade = prompt("Qual é a sua idade?")
// const idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")

// const maior = Number(idade) > Number(idadeAmigo)

// alert("Sua idade é maior do que a do seu amigo? " + maior)

// const diferenca = Number(idade) - Number(idadeAmigo)

// alert("A diferença da idade de vocês é: " + diferenca)

// EXERCÍCIO 2

// const numeroPar = prompt("Insira um numero par")

// const restoDivisao = Number(numeroPar)%2

// alert(" o resto é " + restoDivisao) -> COMENTÁRIO: Todos os pares tem resto 0 e todos os impares são 1

// EXERCÍCIO 3

// let listaDeTarefas = []

// const pergunta1 = prompt("Insira a primeira tarefa")
// const pergunta2 = prompt("Insira a segunda tarefa")
// const pergunta3 = prompt("Insira a terceira tarefa")

// listaDeTarefas.push(pergunta1, pergunta2, pergunta3)

// alert(listaDeTarefas)

// const tarefaRealizada = prompt("Insira o índice da tarefa realizada")

// listaDeTarefas.splice(tarefaRealizada, 1)

// alert(listaDeTarefas)

// EXERCÍCIO 4

// const nome = prompt("Insira seu nome")
// const email = prompt("Insira seu email")

// alert("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome)