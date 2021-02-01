import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PlaylistDetails from './Components/PlaylistDetails'
import './App.css';

const Title = styled.h1`
  color:green;
  font-size: 4rem;
`

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height: 100vh;
`

const Input = styled.input`
  width:50vw;
  height: 2rem;
  border-radius: 10px;
  margin-top: 10vh;
  margin-bottom: 5vh;
`

const Button = styled.button`
  color: green;
  height: 2rem;
  margin: 1vw;
`

const Open = styled.button`
  margin-top: 2vh;
  border-radius: 7px;
  padding: 1rem;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3vh;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
`

const Playlist = styled.li`
  margin-right: 3vw;
`

const Image = styled.img`
  opacity:0.7;
  object-fit: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -3;
`


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
      this.onClickViewPlaylists()
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

  closeDetailsPlaylist = () => {
    this.setState({detailsClose: true})
  }

  enter = (event) => {
    if(event.key === 'Enter'){
      
      if(this.state.inputValuePlaylistName === ""){
        alert("Coloque um nome na sua playlist!")
      } else {
        this.onClickCreatePlaylist(this.state.inputValuePlaylistName)
      }

    }
  }

  render() {
    
    if(this.state.detailsClose) {
      
    return(
      <Container>
        <Image src={"https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/10/Mu%CC%81sica-para-eventos-4-playlists-gratuitas-para-fazer-sucesso-1024x363.png"}></Image>
        <Title>Labefy</Title>
        <h2>Onde a música é arte</h2>

        <div>
        <Input value={this.inputValuePlaylistName} onChange={this.onChangePlaylistName} placeholder={"Insira o nome da playlist"} onKeyPress={this.enter}/>
        </div>


        <Open onClick={this.onClickViewPlaylists}>Ver minhas playlists</Open>
       {this.state.playlists.map((playlist) => {
          return(
            <Item>
              <Playlist onClick={() => this.openDetailsPlaylist(playlist)}>{playlist.name}</Playlist>
              <button onClick={() => this.onClickDeletePlaylist(playlist.id)}>X</button>
            </Item>
          )})}

      </Container>
    )
    } else {
      return(
        <Container>
          <button onClick={this.closeDetailsPlaylist}>Voltar</button>
          <PlaylistDetails 
          playlist={this.state.playlistSelected}
          />
        </Container>
      )
    }

    
  }
}

export default App;
