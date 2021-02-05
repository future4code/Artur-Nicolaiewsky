import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 10vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  align-items: center;

  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
  
  @media(max-width: 800px) {
      width: 80vw;
    }
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  margin-bottom: 0;
  padding-bottom: 1rem;
  border-bottom: solid 1px lightgrey;
`

const SubTitle = styled.h2`
  margin: 1rem;
`

const Approvated = styled.button`

  width: 8vw;
  padding: 0.4rem;
  margin: 2vh 1vw;
  
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #64dd17;
  color:white;

  &:hover {
    
  background: #9cff57;
  }
  
  @media(max-width: 800px) {
      width: 20vw;
    }
`

const Repprovated = styled.button`

  width: 8vw;
  padding: 0.4rem;
  margin: 2vh 1vw;
  
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 5px 0.5px grey;
  border: none;
  cursor: pointer;
  outline: none;
  background: #d50000;
  color:white;

  &:hover {
    
  background: #ff5131;
  }
  
  @media(max-width: 800px) {
      width: 20vw;
    }
`

const Article = styled.article`
    display: flex;
`

const ArticleCandidates = styled.article`
    width: 70vw;
    display: flex;
    flex-direction: column;
    text-align: start;

`

const Description = styled.p`
    width: 30vw;
    word-wrap: break-word;

    
  @media(max-width: 800px) {
    width: 70vw;
    }
`

const Section = styled.section`
    border-bottom: solid 1px lightgrey;
    width: 30vw;
    text-align: start;

    @media(max-width: 800px) {
    width: 70vw;
    }
`

const SectionCenter = styled.section`
    border-bottom: solid 1px lightgrey;
    width: 30vw;
    text-align: center;

    @media(max-width: 800px) {
    width: 70vw;
    }
`

const Candidate = styled.section`
    border-bottom: solid 1px lightgrey;
`

export default function TripDetailsPage() {
    const [tripDetails, setTripDetails] = useState({})
    const token = localStorage.getItem("token")
    const pathParams = useParams()
    const tripId = pathParams.tripId

    console.log(tripId)


    const getTripDetails = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trip/${tripId}`,
        {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTripDetails(res.data.trip)
        })

        .catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getTripDetails()
        console.log(tripDetails)
    }, [])

    const decideCandidate = (candidateId, response) => {
        

        const body ={
            approve: response
        }

        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips/${tripId}/candidates/${candidateId}/decide`, body,
        {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
            getTripDetails()
        })

        .catch((err) => {
            console.log(err.message)
        })
    }

  return (

    <MainContainer>
        <Title>{tripDetails.name}</Title>

        <SubTitle>Informações da viagem:</SubTitle>
        <Section>
            <Article>
                <Description><b>Destino:</b> {tripDetails.planet}</Description>
            </Article>

            <Article>
                <Description><b>Duração:</b> {tripDetails.durationInDays} dias</Description>
            </Article>

            <Article>
                <Description><b>Descrição:</b> {tripDetails.description}</Description>
            </Article>

            <Article>
                <Description><b>Data:</b> {tripDetails.date}</Description>
            </Article>
        </Section>

        <SubTitle>Candidatos:</SubTitle>
        <SectionCenter>
            {tripDetails.approved && tripDetails.approved[0] ?
            tripDetails.approved.map((candidate) => {
                return (
                    <article>
                    <p>{candidate.name}, {candidate.age} anos</p>
                </article>
                )
            }): <p>Nenhum candidato aprovado</p>
            }
        </SectionCenter>

        <section>      
            <SubTitle>Inscrições para analise:</SubTitle>
            {console.log(tripDetails)}

            {tripDetails.candidates && tripDetails.candidates[0] ? tripDetails.candidates.map((candidate) => {
              return(
                  <Candidate>
                      <div>
                        <ArticleCandidates>
                          <Description><b>Nome:</b> {candidate.name}</Description>
                          <Description><b>Idade:</b> {candidate.age} anos</Description>
                          <Description><b>Justificativa:</b> {candidate.applicationText}</Description>
                          <Description><b>Profissão:</b> {candidate.profession}</Description>
                          <Description><b>País:</b> {candidate.country}</Description>
                          <Description><b>Viagem:</b> 7 tons de plutão</Description>
                        </ArticleCandidates>
                        <div>
                          <Approvated onClick={() => decideCandidate(candidate.id, true)}>Aprovar</Approvated>
                          <Repprovated onClick={() => decideCandidate(candidate.id, false)}>Reprovar</Repprovated>
                        </div>
                      </div>
                  </Candidate>
              )
            }): <p>Nenhum candidato inscrito</p>}
            
        </section>
    </MainContainer>

  )
}
