import styled from 'styled-components'
import {goToHome} from '../Router/Coordinates'
import {useHistory} from 'react-router-dom'

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

    @media(max-width: 800px) {
      width: 70vw;
    }
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

  @media(max-width: 800px) {
      width: 30vw;
    }
`

export default function HomePage() {

  const history = useHistory()

  return (

        <MainContainer>
            <h2>Estamos com problemas para encontrar essa página :(</h2>
            <Send onClick={() => goToHome(history)}>Home</Send>
        </MainContainer>

  )
}
