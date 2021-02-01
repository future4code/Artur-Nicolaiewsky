import React from 'react'
import axios from 'axios'
import TeamPage from './TeamPage'

export default class Landingpage extends React.Component {

    state={
        seasons:[],
        seasonSelected: "",

        id: this.props.selectedId,
        team: this.props.selectedTeam,

        page: 0
    }
    
    
  componentDidMount = () => {
    this.allSeasons()
    console.log(this.props.selectedId)
  }
    
  allSeasons = () => {
    axios
    .get("https://api-football-v1.p.rapidapi.com/v2/seasons",
    {
      headers: {
        'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
    })

    .then((res) => {
      this.setState({seasons: res.data.api.seasons})
    })

    .catch((err) => {
      console.log(err.message)
    })
  }

  handleChange = (e) => {
    this.setState({seasonSelected: e.target.value})
  }

  nextPage = () => {
      this.setState({page: this.state.page +1})
  }
    render(){

            switch (this.state.page) {
                case 0:
                    return(
                    
                        <div> 
                            <select onChange={this.handleChange}>
                                <option>Temporada:</option>
                                    {this.state.seasons.map((season) => {
                                        return(
                                            <option>{season}</option>
                                        )
                                        })}
                            </select>
                            
                            <button onClick={this.nextPage}>Vamos lá</button>
                        </div>
        )
                    break;
                case 1: 
                    return (
                        <div>
                            <TeamPage 
                            selectedId={this.state.id}
                            seasonSelected={this.state.seasonSelected}
                            selectedTeam={this.state.team}
                            />
                        </div>
                    )
                    break;
            }
    }
} 