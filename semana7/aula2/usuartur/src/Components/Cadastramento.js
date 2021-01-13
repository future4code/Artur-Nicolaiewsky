import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3vh;
  `

const Box = styled.div`
    display: flex;
    justify-content: center;
  `

const Input = styled.input`
    margin-bottom: 2vh;  
    margin-left: 0.5vw;
  `

class Cadastramento extends React.Component {
  state={
    inputNomeValue:"",
    inputEmailValue:"",
  }

  onChangeNome = (e) => {
    this.setState({inputNomeValue: e.target.value})
  }

  onChangeEmail = (e) => {
    this.setState({inputEmailValue: e.target.value})
  }

  onClickAdicionaUsuario = () => {

    const body = {
      name: this.state.inputNomeValue,
      email: this.state.inputEmailValue
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "artur-pellicioli-epps"
          }
        }
      )
      .then(() => {
        this.setState({inputEmailValue: "", inputNomeValue: ""})
          alert("usuário adicionado com sucesso")
      })
      .catch(() => {
        console.log(body)
        alert("Não conseguimos criar o seu usuário")
      })

  }

  render(){

    return (
      <Container>
        <Box>
          <label>Nome</label>
          <Input value={this.state.inputNomeValue} onChange={this.onChangeNome}/>
        </Box>
        <Box>
          <label>Email</label>
          <Input value={this.state.inputEmailValue} onChange={this.onChangeEmail}/>
        </Box>
      <button onClick={this.onClickAdicionaUsuario}>Adicionar Novo Usuário</button>
      </Container>
    );
  }
}

export default Cadastramento;