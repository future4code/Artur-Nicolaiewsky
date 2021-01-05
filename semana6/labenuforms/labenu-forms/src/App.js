import React from 'react'
import './App.css';
import EtapaUm from './components/Etapa1'
import EtapaDois from './components/Etapa2'
import EtapaTres from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa){

      case 1: 
      return <EtapaUm />

      case 2: 
      return <EtapaDois />

      case 3:
      return <EtapaTres />

      case 4:
        return <EtapaFinal />

      default: console.log("deu ruim");

    }
  }

  irParaProximaEtapa = () => {

    this.setState({etapa: this.state.etapa+1})
  }

  render(){
    if (this.state.etapa < 4) {
      return(
        <div className="App">
          
          {this.renderizaEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div> 
    )}else{

      return (
        <div className="App">
          
          {this.renderizaEtapa()}

        </div>
      );
    }
  }
}

export default App;
