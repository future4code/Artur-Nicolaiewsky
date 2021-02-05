import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToHome} from '../Router/Coordinates'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 15vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align:center;
  align-items: center;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
`

const Title = styled.h2`
  margin: 1rem;
`
const SubTitle = styled.h2`
  margin: 1rem;
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

export default function CongratulationsPage() {
  
  const history = useHistory()

  return (

    <MainContainer>
        <Title>Parabéns, você concluiu o formulário!</Title>
        <SubTitle>Agora nossa equipe vai analisar suas informações e em breve saberemos se você vai ser um de nossos Labenautas.</SubTitle>
        <Send onClick={() => goToHome(history)}> Home</Send>
    </MainContainer>

  )
}
