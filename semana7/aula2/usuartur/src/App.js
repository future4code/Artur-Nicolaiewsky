import React from 'react'
import './App.css';
import Cadastramento from './Components/Cadastramento'
import Usuarios from './Components/Usuarios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    margin: 15vh 30vw;
    padding: 10vh 8vw;
  `

const Box = styled.div`
    margin: 0 10vw;
    margin-top: 10vh;
  `

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
        <Container>
          <div>
            <h1>Faça seu cadastro!</h1>

            <Cadastramento />

            <Box>
              <button onClick={this.mudarModo}>Ver usuários</button>
            </Box>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <Usuarios />
          <button onClick={this.mudarModo}>Menu de Cadatros</button>
        </Container>
      );
    }
  
  }
}

export default App;
