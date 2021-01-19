import React from 'react'
import axios from 'axios'

export default class Gamebook extends React.Component {

    state={
        bookmakers: [],
        openSite: false,
        siteId: "",
} 

    componentDidMount = () => {
        this.chooseBetHouse(this.props.fixture.fixture_id)
    }

    chooseBetHouse = (id) => {
        
        axios
        .get("https://api-football-v1.p.rapidapi.com/v2/odds/fixture/" + id,
        {
            headers: {
                'x-rapidapi-key': 'cae977b98amsh9cf092022a78a44p1493dajsn479759e04fa5',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
        }
        )

        .then((res) => {
            this.setState({bookmakers: res.data.api.odds[0].bookmakers})
        })

        .catch((err) => {
            console.log(err.message)
        })
    }

    openSite = (site) => {
        this.setState({openSite: true})
        this.setState({siteId: site.bookmaker_id})
    }


    render() {

       if(this.state.openSite){
            this.state.bookmakers.map((site) => {
                if(site.bookmaker_id === this.state.siteId){
                    {site.bets[0].values.map((bet) => {
                        return(
                            <li>{bet.value + " odd: " + bet.odd}</li>
                        )
                    })}
                }
            })
        }
    

        return (
            <div>
                <h2>{this.props.fixture.league.country}</h2>
                <h2>{this.props.fixture.league.name}</h2>
                <h4>Árbitro: {this.props.fixture.referee}</h4>

                <div>
                    <h2>Time da casa:</h2>
                    <h3>{this.props.fixture.homeTeam.team_name}</h3>
                    <img src={this.props.fixture.homeTeam.logo}/>
                </div>
                
                <div>
                    <h2>Time visitante:</h2>
                    <h3>{this.props.fixture.awayTeam.team_name}</h3>
                    <img src={this.props.fixture.awayTeam.logo}/>
                </div>
                
                <div>
                {this.state.bookmakers.map((site) => {
                    return(
                        <button onClick={() => this.openSite(site)}>{site.bookmaker_name}</button>
                    )
                })}
                </div>
            </div>
        )
    }
}