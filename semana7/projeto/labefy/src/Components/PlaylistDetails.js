import React from 'react'
import axios from 'axios'

class PlaylistDetails extends React.Component {
  state={
      tracks: [],
      inputValueTrackName: "",
      inputValueTrackArtist: "",
      inputValueTrackUrl:"",

  }

  componentDidMount = () => {
      this.viewPlaylistTracks(this.props.playlist.id)
      
  }

  viewPlaylistTracks = (id) => {
      
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
    {
        headers: {
            Authorization: "artur-pellicioli-epps"
        }
    }
    )
    .then((res) => {
        this.setState({tracks:res.data.result.tracks})
    })

    .catch((err) => {
        console.log(err.message)
    })
  }

    onChangeTrackArtist = (e) => {
        this.setState({inputValueTrackArtist: e.target.value})
    }

    onChangeTrackUrl = (e) => {
        this.setState({inputValueTrackUrl: e.target.value})
    }

    onChangeTrackName = (e) => {
        this.setState({inputValueTrackName: e.target.value})

        axios
        .get(`https://api.spotify.com/v1/search?q=name:${e.target.value}&type=track`,
        {
            headers: {
                Authorization: ""
            }
        }
        )
    }


    addNewTrack = (name, artist, url) => {
        const body = {
            name: name,
            artist: artist,
            url: url
        }
        
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`,
        body,
        {
            headers: {
                Authorization: "artur-pellicioli-epps"
            }
        }
        )

        .then((res) => {
            console.log(res.data)
            
      this.viewPlaylistTracks(this.props.playlist.id)
        })

        .catch((err) => {
            console.log(err.message)
        })
    }

    deleteTrack = (playlistId, trackId) => {

        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/` + trackId,
        {
            headers: {
                Authorization: "artur-pellicioli-epps"
            }
        }
        )

        .then((res) => {
            console.log(res.data)
        
            this.viewPlaylistTracks(this.props.playlist.id)
        })

        .catch((err) => {
            console.log(err.message)
        })

    }

  render() {
    return (
    
        <div>
            <h2>Detalhes de {this.props.playlist.name}</h2>
            <input value={this.inputValueTrackName} onChange={this.onChangeTrackName} placeholder={"Nome da música"}/>
            <input value={this.inputValueTrackArtist} onChange={this.onChangeTrackArtist} placeholder={"Artista da música"}/>
            <input value={this.inputValueTrackUrl} onChange={this.onChangeTrackUrl} placeholder={"Link da música"}/>
            <button onClick={() => this.addNewTrack(this.state.inputValueTrackName, this.state.inputValueTrackArtist, this.state.inputValueTrackUrl)}>Adicionar</button>
            <h3>Músicas:</h3>
            {this.state.tracks.map((track) => {
                return(
                    <div>
                    <li>{track.name} - de {track.artist}</li>
                    <audio controls src={track.url} />
                    <button onClick={() => this.deleteTrack(this.props.playlist.id , track.id)}>Deletar Música</button>
                    </div>
                )
            })}
        </div>

    )
  }
}
export default PlaylistDetails;