import React from 'react'
import axios from 'axios'

class Usuarios extends React.Component {
    state={
        listaDeUsuarios: []
    }

    componentDidMount = () => {
        this.mostrarUsuarios()
    }

    mostrarUsuarios = () => {

        axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "artur-pellicioli-epps"
                }
            }
        )

        .then((resposta) => {
            this.setState({listaDeUsuarios: resposta.data})
        })

        .catch((error) => {
            alert("Houve algum problema, ERRRO:      "+ error.message)
        })
    }

    deletarUsuario = (user) => {

        axios
        .delete(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + user.id,
            {
                headers: {
                    Authorization: "artur-pellicioli-epps"
                }
            }
        )

        .then(() => {
            this.mostrarUsuarios()
            alert("Usuário deletado com sucesso!")
        })

        .catch((er) => {
            alert("Houve um erro inesperado" + er.message)
        })
    }


  render(){
    const renderizaLista = 
    this.state.listaDeUsuarios.map((usuario) => {
      return(
          <div>
            <li>{usuario.name}</li>
            <button onClick={() => this.deletarUsuario(usuario)}>X</button>
          </div>
        )
    })

      return(
        <div>
            <ul>
            {renderizaLista}
            </ul>
        </div>
      )
  }
}
export default Usuarios;