import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'


export default function TripDetailsPage() {
    const [tripDetails, setTripDetails] = useState({})
    const [approve, setApprove] = useState("")

    const token = localStorage.getItem("token")

    const pathParams = useParams()

    const tripId = pathParams.tripId

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

    const decideCandidate = (candidateId) => {
        
        setApprove(true)

        const body ={
            approve: approve
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
        })

        .catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getTripDetails()
    }, [])

  return (

    <main>
        <h1>{tripDetails.name}</h1>

        <section>
            <h2>Informações da viagem:</h2>
            <article>
                <p>Destino:</p>
                <p>{tripDetails.planet}</p>
            </article>

            <article>
                <p>Duração:</p>
                <p>{tripDetails.durationInDays} dias</p>
            </article>

            <article>
                <p>Descrição:</p>
                <p>{tripDetails.description}</p>
            </article>

            <article>
                <p>Data:</p>
                <p>{tripDetails.date}</p>
            </article>
        </section>

        <section>
            <h2>Candidatos:</h2>
            {tripDetails.approved === null ?
            tripDetails.approved.map((candidate) => {
                return (
                    <article>
                    <p>{candidate.name}, {candidate.age} anos</p>
                </article>
                )
            }): <p>Nenhum candidato aprovado</p>
            }


        </section>

        <section>      
            <h2>Inscrições para analise</h2>
            {console.log(tripDetails)}

            {tripDetails.candidates && tripDetails.candidates[0] ? tripDetails.candidates.map((candidate) => {
              return(
                  <article>
                      <p>{candidate.name}</p>
                      <div>
                        <div>
                          <p>Idade: {candidate.age} anos</p>
                          <p>Justificativa: {candidate.applicationText}</p>
                          <p>Profissão: {candidate.profession}</p>
                          <p>País: {candidate.country}</p>
                          <p>Viagem: 7 tons de plutão</p>
                        </div>
                        <div>
                          <button onClick={() => decideCandidate(candidate.id)}>Aprovar</button>
                          <button>Reprovar</button>
                        </div>
                      </div>
                  </article>
              )
            }): <p>Nenhum candidato inscrito</p>}
            
        </section>
    </main>

  )
}
