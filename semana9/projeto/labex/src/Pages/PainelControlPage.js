import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToCreateTrip, goToTripDetails} from '../Router/Coordinates'
import useResquestDataGet from '../hooks/useRequestDataGet'
import { useEffect, useState } from 'react'


export default function PainelControlPage() {
    const [allTrips, setAllTrips] = useState([])

    const listTrips = useResquestDataGet(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
      []
      )
  
      useEffect(() => {
        
        setAllTrips(listTrips.trips)
  
      })
    
    const history = useHistory()

  return (

    <main>
        <section>
            <h2>Este é o painel de controle LabeX</h2>

            <h3>Próximas viagens:</h3>
            {allTrips && allTrips.map((trip) => {
                return (
                    <article onClick={() => goToTripDetails(history)}>
                        <p>{trip.name } {(trip.planet)}</p>
                        <p>Ver Detalhes</p>
                    </article>
                )
            })}

            <button>Ver mais...</button>

            <button onClick={() => goToCreateTrip(history)}>Adicionar nova viagem</button>
        </section>
    </main>

  )
}
