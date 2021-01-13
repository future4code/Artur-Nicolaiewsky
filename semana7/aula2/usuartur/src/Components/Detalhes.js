import React from 'react'
import axios from 'axios'
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
const BoxMenor = styled.div`
    margin-right: 1vw;
  `

  const BoxMaior = styled.div`
    margin-left: 1vw;
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

class Detalhes extends React.Component {
    state={
        detalhes:[],
        editando: false,

        inputEmail: "",
        inputName: ""
    }

    componentDidMount = () => {
        this.detalhesDoUsuario()
    }

    detalhesDoUsuario = () => {

    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + this.props.id,
        {
            headers: {
                Authorization: "artur-pellicioli-epps"
            }
        }
    )

    .then((resposta) => {
        this.setState({detalhes: resposta.data})
        console.log(resposta.data)
    })

    .catch((error) => {
        alert(error.message)
        console.log(this.props.id)
    })

    }

    onChangeName = (e) => {
        this.setState({inputName: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }

    editar = () => {
        this.setState({editando: true})
    }

    salvar = () => {

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        axios
        .put("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + this.props.id,
        body,
            {
                headers: {
                    Authorization: "artur-pellicioli-epps"
                }
            }
        )

        .then((res) => {
            this.setState({detalhes: res.data})
            this.detalhesDoUsuario()
            this.setState({editando: false})
            alert("Você alterou os dados do usuário!")
        })

        .catch((error) => {
            console.log(error.message)
        })
    }
    

  render(){
      if(this.state.editando){
          return(
            <Container>
                <li>{this.state.detalhes.name}</li>
                <li>{this.state.detalhes.email}</li>
                <input value={this.inputName} onChange={this.onChangeName} placeholder={"Nome"}/>
                <input value={this.inputEmail} onChange={this.onChangeEmail} placeholder={"Email"}/>
                <button onClick={this.salvar}>Salvar</button>
          </Container>
          )
        } else {
            return (
                <Container>
                    <Box>
                        <BoxMenor>
                            <li>{this.state.detalhes.name}</li>
                            <li>{this.state.detalhes.email}</li>
                        </BoxMenor>
                        <BoxMaior>
                            <button onClick={() => this.props.delete(this.props.id)}>X</button>
                            <button onClick={this.editar}>Editar</button>
                        </BoxMaior>
                        </Box>
                </Container>
            )
        }   
    }
}

export default Detalhes;