import React from 'react';
import './App.css';
import styled from 'styled-components'

class App extends React.Component {
    state = {
      inputValue: "",
      feed: [{mensagemValue: ""}],
      feita: false
    }

    onChangeInput = (e) => {
      this.setState({inputValue: e.target.value})
    }

    
    onClickButton = () => {
      let novaMensagem = {

        mensagemValue: this.state.inputValue

      }

      let novoFeed = [...this.state.feed, novaMensagem]

      this.setState({feed: novoFeed})
      this.setState({inputValue: ""})
    }

    onClickCheck = () => {
        this.setState({feita: !this.state.feita})
    }


  render() {

    console.log(this.state.feita)

    let Mensagem = styled.li`
      text-decoration: none;
    `

    if(this.state.feita) {
       Mensagem = styled.li`
      text-decoration: line-through;
    `
    }

    let feedDeMensagens = this.state.feed.map((msg) => {
      return (
        
        <Mensagem onClick={this.onClickCheck}>{msg.mensagemValue}</Mensagem>
      )
    })

    return (
      <div className="App">

        <h3>LISTA DE TAREFAS</h3>
        <input value={this.state.inputValue} onChange={this.onChangeInput}></input>
        <button onClick={this.onClickButton}>Adicionar</button>

        <div>
          <label>Filtro</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        {feedDeMensagens}

      </div>
    );
  }
}

export default App;
