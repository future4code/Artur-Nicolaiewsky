import React from 'react'
import axios from 'axios'

export default class Landingpage extends React.Component {

    state={
        leagues: [],
        players:[],
        status:{},
        nextFixtures: [],
        predictResult: [],
        details: false,

        finalResult: ""

    }

    componentDidMount = () => {
        this.onClickDetailsTeam(this.props.selectedId, this.props.seasonSelected)

        this.getNextFixtures(this.props.selectedId)
    }

    onClickDetailsTeam = (id, season) => {
    
        axios
        .get(`https://api-football-v1.p.rapidapi.com/v2/leagues/team/${id}/${season}`,
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
        .get(`https://api-football-v1.p.rapidapi.com/v2/players/team/${id}/${season}`,
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

    this.setState({details: !this.state.details})

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

  getNextFixtures = (id) => {
    console.log(id)
    axios
    .get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${id}/next/5/`,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
    })

    .then((res) => {
        console.log(res.data.api.fixtures)
      this.setState({nextFixtures: res.data.api.fixtures})
    })

    .catch((err) => {
      console.log(err.message)
    })
  }
  
  predict = (id, home, away) => {
    axios
    .get(`https://api-football-v1.p.rapidapi.com/v2/predictions/${id}`,
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
    })

    .then((res) => {
        console.log(res.data.api.predictions)
      this.setState({predictResult: res.data.api.predictions})

      this.state.predictResult.map((result) => {
          if(result.match_winner === "N 2") {
              this.setState({finalResult: away})
          } else if(result.match_winner === "1 N") {
                this.setState({finalResult: home})
          } else {
            this.setState({finalResult: "draw"})
          }
      })
    })

    .catch((err) => {
      console.log(err.message)
    })
  }
  

  details = () => {
      this.setState({details: !this.state.details})
  }

  predictResult = (id) => {
      this.setState({predictResult: id})
  }

  openTeam = () => {
      this.setState({openTeam: !this.state.openTeam})
      console.log(this.state.openTeam)
  }
  

    render(){
        
        if(this.state.details){
            return(
                <div>
                    <li>{this.state.status.firstname}</li>
                    <li>{this.state.status.lastname}</li>
                    <li>{this.state.status.position}</li>
                    <li>{this.state.status.age}</li>
                    <li>{this.state.status.birth_date}</li>
                    <li>{this.state.status.nationality}</li>
                    <li>{this.state.status.birth_place}</li>
                    <li>{this.state.status.season}</li>

                    <button onClick={this.details}>Close</button>
            </div>
            )
        }

    if(this.state.openTeam){
        return(
            <div>
                <div>
                    {this.state.players.map((player) => {
                        return (
                            <li onClick={() => this.onClickDetailsPlayer(player.player_id)}>{player.player_name}</li>
                            )
                        })}

                        <button onClick={this.openTeam}>Fechar Elenco</button>
                </div>

            </div>
        )
    }   

    return (
        <div>
            <h2>Grêmio</h2>        

            <div>
            <b>Criado em:</b>
            <p>{this.props.selectedTeam.founded}</p>
            </div>

            <div>
            <b>Estádio:</b>
            <p>{this.props.selectedTeam.venue_name}</p>
            </div>

            <div>
            <b>Capacidade Máxima:</b>
            <p>{this.props.selectedTeam.venue_capacity + "pessoas"}</p>
            </div>

            <div>
            <b>Criado em:</b>
            <p>{this.props.selectedTeam.venue_address + " " + this.props.selectedTeam.venue_city + " " + this.props.selectedTeam.country}</p>
            </div>

            <div>
                <h3>Próximas 5 partidas</h3>

                {this.state.nextFixtures.map((fixture) => {
                    return (
                        <div>

                            <p>{fixture.homeTeam.team_name} x {fixture.awayTeam.team_name}</p>
                            <li>{fixture.league.name}</li>
                            <li>{fixture.venue}</li>

                            <button onClick={() => this.predict(fixture.fixture_id , fixture.homeTeam.team_name , fixture.awayTeam.team_name)}>Preveja o resultado</button>

                        </div>
                        )
                })}

                    <alert>{this.state.finalResult}</alert>
            </div>

            <button onClick={this.openTeam}>Veja o elenco daquele ano!</button>
        </div>
    )
      
    }
} 