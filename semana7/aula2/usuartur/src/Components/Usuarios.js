import React from 'react'
import axios from 'axios'
import Detalhes from './Detalhes'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
  `

  const BoxMaior = styled.div`
  margin: 0 0 10vh 0;
  
  `

const Button = styled.button`
    margin-left: 20vw;
  `

const Titulo = styled.h1`
    margin: 0 10vw 3vh 10vw;
  `

const Input = styled.input`
    width: 25vw;
    margin: 0 auto;
  `

class Usuarios extends React.Component {
    state={
        listaDeUsuarios: [],
        idUser: "",
        fechado: true,
        inputBusca: ""
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
            alert("Houve algum problema")
        })
    }

    deletarUsuario = (id) => {
        if(window.confirm("Tem certeza de que deseja deletar?")){

            axios
            .delete(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + id,
                {
                    headers: {
                        Authorization: "artur-pellicioli-epps"
                    }
                }
            )
    
            .then(() => {
                this.mostrarUsuarios()
                alert("Usuário deletado com sucesso!")
                this.setState({fechado: true})
            })
    
            .catch((er) => {
                alert("Houve um erro inesperado")
            })
        }
    }

    abrirDetalhes = (id) => {
        this.setState({idUser: id})
        this.setState({fechado: !this.state.fechado})
    }

    voltar = () => {
        this.setState({fechado: true})
    }

    onChangeBusca = (e) => {
        this.setState({inputBusca: e.target.value})
    }

    onClickBuscar = () => {
        if(this.state.inputBusca === "") {
            this.mostrarUsuarios()
        } else {

            axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=" + this.state.inputBusca,
            {
                headers: {
                    Authorization: "artur-pellicioli-epps"
                }
            }
            )
            
            .then((res) => {
                this.setState({listaDeUsuarios: res.data})
            })
    
            .catch((error) => {
                console.log(error.message)
            })

        }

    }

  render(){
      console.log(this.state.fechado)
    const renderizaLista = 
    this.state.listaDeUsuarios.map((usuario) => {
      return(
          <Box>
            <li onClick={() => this.abrirDetalhes(usuario.id)}>{usuario.name}</li>
            <Button onClick={() => this.deletarUsuario(usuario.id)}>X</Button>
          </Box>
        )
    })

    if(this.state.fechado){
        return(
            <Container>
                <BoxMaior>
                    <Titulo>Usuários</Titulo>
                    <Input value={this.state.inputBusca} onChange={this.onChangeBusca}  placeholder={"Pesquise pelo nome ou email"}/>
                    <button onClick={this.onClickBuscar}>Buscar</button>
                </BoxMaior>
                
                <ul>
                {renderizaLista}
                </ul>
            </Container>
          )
    } else {
        return(
            <Container>
                <h1>Detalhes:</h1>
                <Detalhes
                    id={this.state.idUser}
                    delete={this.deletarUsuario}
                />
                <button onClick={this.voltar}>Voltar</button>
            </Container>
        )
    }
  }
}
export default Usuarios;