import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToApplication} from '../Router/Coordinates'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 15vh;
  width: 35vw;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align:center;

  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
`

const Title = styled.h1`
  margin: 0;
`

const Gif = styled.img`
  width: 8vw;
  height: 8vw;
  margin-bottom: 4vh;
`

const Send = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin-bottom: 2vh;
  
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #2196f3;
  color:white;

  &:hover {
    
  background: #6ec6ff;
  }
`

export default function HomePage() {

    const history = useHistory()

  return (

        <MainContainer>
            <Title lang="en">Welcome to LabeX</Title>
            <h2>A maior empresa de viagens espacias da galaxia!</h2>
            <Gif src={"/W31X.gif"}/>
            <Send onClick={() => goToApplication(history)}>Inscrever-se</Send>
        </MainContainer>

  )
}
