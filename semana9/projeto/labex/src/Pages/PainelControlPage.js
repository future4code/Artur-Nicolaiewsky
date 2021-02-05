import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToCreateTrip, goToTripDetails} from '../Router/Coordinates'
import useRequestDataGet from '../hooks/useRequestDataGet'
import { useEffect, useState } from 'react'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 10vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align:center;
  align-items:center;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 1rem;
`

const Title = styled.h1`
  margin: 1rem;
  font-size: 2rem;
`

const SubTitle = styled.h2`
  margin: 1rem;
`

const Article = styled.article`
  width: 20vw;
  padding: 3rem 0;
  border: solid;
  cursor:pointer;
  
  border-radius: 10px;
  border: none;
  padding: 2vh 1vw;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;

  &:hover {
    background: whitesmoke;
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
`

const Name = styled.p`
  margin-bottom: 3vh;
  font-size: 1.5rem;
`

const SubName = styled.p`
font-weight: bold;
`

export default function PainelControlPage() {
    const [allTrips, setAllTrips] = useState([])

    const listTrips = useRequestDataGet(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
      []
      )
  
      useEffect(() => {
        
        setAllTrips(listTrips.trips)
  
      })
    
    const history = useHistory()

  return (

    <MainContainer>
            <Title>Este é o painel de controle da LabeX</Title>

            <SubTitle>Próximas viagens:</SubTitle>
            
            <Grid>
              {allTrips && allTrips.map((trip) => {
                  return (
                      <Article onClick={() => goToTripDetails(history, trip.id)}>
                          <Name>{trip.name } ({trip.planet})</Name>
                          <SubName>Ver Detalhes</SubName>
                      </Article>
                  )
              })}
            </Grid>

            <Send onClick={() => goToCreateTrip(history)}>Adicionar nova viagem</Send>
    </MainContainer>

  )
}
