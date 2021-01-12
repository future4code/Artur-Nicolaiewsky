import React from 'react'
import './App.css';
import Cadastramento from './Components/Cadastramento'
import Usuarios from './Components/Usuarios'

class App extends React.Component {
  state={
    modo: true
  }

  mudarModo = () => {
    this.setState({modo: !this.state.modo})
  }

  render(){

    if(this.state.modo){
      return (
        <div className="App">
          <h1>Faça seu cadastro!</h1>
          <Cadastramento />
          <button onClick={this.mudarModo}>Ver usuários</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Usuários</h1>
          <Usuarios />
          <button onClick={this.mudarModo}>Voltar</button>
        </div>
      );
    }
  
  }
}

export default App;
