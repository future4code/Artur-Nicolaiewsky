import React from 'react'
import axios from 'axios'
import './App.css';
import Landingpage from './Componets.js/Landingpage'
import ChooseYourTeam from './Componets.js/ChooseYourTeam'

class App extends React.Component{
  state={
    page: 0,

    teams: [],
    inputValueTeam: "",


    leagues:[]
  }

  nextPage = () => {
    this.setState({page: this.state.page +1})
  }

  onChangeTeam = (e) => {


      this.setState({inputValueTeam: e.target.value})

  
      if(this.state.inputValueTeam.length > 2) {
        
      console.log(this.state.inputValueTeam)

        axios
    .get("https://api-football-v1.p.rapidapi.com/v2/teams/search/" + this.state.inputValueTeam,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
    })

    .then((res) => {
      console.log(res.data.api.teams)
      this.setState({teams: res.data.api.teams})
    })

    .catch((err) => {
      console.log(err.message)
    })
    }

  }

  render(){

      switch(this.state.page){
        case 0: 
          return(
            <div className="App">
              <Landingpage />
              <button onClick={this.nextPage}>VAMOS COMEÇAR!</button>
            </div>
        ) 
          break;

        case 1: 
          return(
            <div className="App">
              <h1>Escolha seu time!</h1>
              <input value={this.inputValueTeam} onChange={this.onChangeTeam}/>
              <ChooseYourTeam teams={this.state.teams}/>
            </div>
        )
          break;
      }

    return (
      <div className="App">
            <p>Houve algum problema</p>
      </div>
    );
  }
}

export default App;
