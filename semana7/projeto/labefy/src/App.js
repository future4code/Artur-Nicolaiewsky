import React from 'react'
import axios from 'axios'
import PlaylistDetails from './Components/PlaylistDetails'
import './App.css';

class App extends React.Component {
  state={
    inputValuePlaylistName: "",
    playlists: [],
    detailsClose: true,
    playlistSelected: {}

  }

  onChangePlaylistName = (e) => {
    this.setState({inputValuePlaylistName: e.target.value})
  }

  onClickCreatePlaylist = (name) => {
    let body = {
      name: name
    }

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body,
    {
      headers: {
        Authorization: "artur-pellicioli-epps"
      }

    })

    .then(() => {
      this.setState({inputValuePlaylistName: ""})
    })

    .catch((err) => {
      console.log(err.message)
    })
  }

  onClickViewPlaylists = () => {

    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",

    {
      headers: {
        Authorization: "artur-pellicioli-epps"
      }

    })

    .then((res) => {
      this.setState({playlists: res.data.result.list})
      console.log(res.data.result.list)
    })

    .catch((err) => {
      console.log(err.message)
    })
  }
  
  onClickDeletePlaylist = (playlistId) => {
    
    axios
    .delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + playlistId,

    {
      headers: {
        Authorization: "artur-pellicioli-epps"
      }

    })

    .then((res) => {
      this.onClickViewPlaylists()
    })

    .catch((err) => {
      console.log(err.message)
    })
  }

  openDetailsPlaylist = (playlist) => {
    this.setState({detailsClose: false})
    this.setState({playlistSelected: playlist})
  }

  render() {
    
    if(this.state.detailsClose) {
      
    return(
      <div>

      <input value={this.inputValuePlaylistName} onChange={this.onChangePlaylistName}/>
      <button onClick={() => this.onClickCreatePlaylist(this.state.inputValuePlaylistName)}>Criar</button>


      <button onClick={this.onClickViewPlaylists}>Ver minhas playlists</button>

      {this.state.playlists.map((playlist) => {
      return(
        <div>
          <li onClick={() => this.openDetailsPlaylist(playlist)}>{playlist.name}</li>
          <button onClick={() => this.onClickDeletePlaylist(playlist.id)}>X</button>
        </div>
      )})}

      </div>
    )
    } else {
      return(

        <PlaylistDetails 
        playlist={this.state.playlistSelected}
      />
      )
    }

    
  }
}

export default App;
