import React from 'react'
import axios from 'axios'

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
      <div>
        <div>
          <label>Nome</label>
          <input value={this.state.inputNomeValue} onChange={this.onChangeNome}/>
        </div>
        <div>
          <label>Email</label>
          <input value={this.state.inputEmailValue} onChange={this.onChangeEmail}/>
      </div>
      <button onClick={this.onClickAdicionaUsuario}>Adicionar Novo Usuário</button>
      </div>
    );
  }
}

export default Cadastramento;