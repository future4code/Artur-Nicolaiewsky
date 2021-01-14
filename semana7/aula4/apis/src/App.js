import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component{
  state={
    teams: [],
    inputValueTeam: "",

    players:[],
    status:{},

    leagues:[]
  }
  
  onChangeTeam = (e) => {

    this.setState({inputValueTeam: e.target.value})
  }

  onSearchTeam = () => {
  
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

  onClickDetailsTeam = (id) => {

    axios
    .get("https://api-football-v1.p.rapidapi.com/v2/leagues/team/" + id,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
    })

    .then((res) => {
      console.log(res.data.api.leagues)
      this.setState({leagues: res.data.api.leagues})
    })

    .catch((err) => {
      console.log(err.message)
    })

    axios
    .get("https://api-football-v1.p.rapidapi.com/v2/players/team/" + id,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
      }
    })
    .then((res) => {
      this.setState({players: res.data.api.players})
    })

    .catch((err) => {
      console.log(err.message)
    })
  }

  
  onClickDetailsPlayer = (idPlayer) => {
    axios
    .get("https://api-football-v1.p.rapidapi.com/v2/players/player/" + idPlayer,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
      }
    })
    .then((res) => {
      console.log(res.data.api.players[0])
      this.setState({status: res.data.api.players[0]})
    })

    .catch((err) => {
      console.log(err.message)
    })
  }
  


  render(){

    return (
      <div className="App">
        
      <div>
        <select>
          <option>Ligas:</option>
          {this.state.leagues.map((league) => {
            return(
              <option>{league.name+ " - " + league.season}</option>
            )
          })}
        </select>
      </div>

        <div>
          {this.state.players.map((player) => {
            return (
              <li onClick={() => this.onClickDetailsPlayer(player.player_id)}>{player.player_name}</li>
            )
          })}
        </div>

        <div>
              <div>
              <li>{this.state.status.firstname}</li>
              <li>{this.state.status.lasttname}</li>
              <li>{this.state.status.position}</li>
              <li>{this.state.status.age}</li>
              <li>{this.state.status.birth_date}</li>
              <li>{this.state.status.nationality}</li>
              <li>{this.state.status.birth_place}</li>
              </div>
        </div>

        
        <div>
          <input value={this.inputValueTeam} onChange={this.onChangeTeam}/>
          <button onClick={this.onSearchTeam}>Buscar Time</button>

          {this.state.teams.map((team) => {
            return (
              <div>
                <li onClick={() => this.onClickDetailsTeam(team.team_id)}>{team.name}</li>
                <img src={team.logo}/>
                <li>{team.venue_name}</li>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default App;
