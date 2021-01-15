import React from 'react'
import axios from 'axios'
import Season from './Season'

export default class ChooseYourTeam extends React.Component {

    state= {
        selectedId: "",
        selectedTeam: {},
        page: 0
    }

    
  selectId = (id, team) => {
    this.setState({selectedId: id})
    this.setState({selectedTeam: team})
    this.nextPage()
  }

  nextPage = () => {
      this.setState({page: this.state.page +1})
  }

  backPage = () => {
      
    this.setState({page: this.state.page -1})
  }
 
    render(){

        switch (this.state.page) {
            case 0:
                return(
                <div>
                    {this.props.teams.map((team) => {
                        return (
                            <div>
                                <li onClick={() => this.selectId(team.team_id, team)}>{team.name}</li>
                                <img src={team.logo}/>
                            </div>
                        )
                        })}
                </div>
                )
            break;

            case 1: 
                return(

                    <div>
                        <button onClick={this.backPage}>Sair da página do grêmio</button>
                        <Season
                        selectedId={this.state.selectedId}
                        selectedTeam={this.state.selectedTeam}
                        />
                    </div>
                )
            break;
        }
    }
} 