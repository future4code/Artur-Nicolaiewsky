const titulo = document.querySelector("#titulo-post")
const autor = document.querySelector("#autor-post")
const conteudo = document.querySelector("#conteudo-post")
const botao = document.querySelector("#criar-post")
const container = document.querySelector("#container-de-posts")

let posts = []

function postar() {
    
    let postInfos = {

    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value
}

posts.push(postInfos)
console.log(posts)

container.innerHTML += 
`   <div class="postagem"> 
        <h2>${postInfos.titulo}</h2>
        <p class="conteudoDoPost">${postInfos.conteudo}</p>
        <p class="autorDoPost">${postInfos.autor}</p>
    </div>`

titulo.value = ""
autor.value = ""
conteudo.value = ""
}
