import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import useInput from '../hooks/useInput'
import {goToCongratulations} from '../Router/Coordinates'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useRequestDataGet from '../hooks/useRequestDataGet'

export default function ApplicationFormPage() {
    const [name, onChangeName] = useInput()
    const [planet, onChangePlanet] = useInput()
    const [age, onChangeAge] = useInput()
    const [application, onChangeApplication] = useInput()
    const [profession, onChangeProfession] = useInput()
    const [country, onChangeCountry] = useInput()
    const [allTripsSelect, setAllTripsSelect] = useState([])

    const history = useHistory()

    const applicationTest = (planet, history) => {

        const body = {
            name: name,
            age: age,
            applicationText: application,
            profession: profession,
            country: country
        }
    
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips/${planet}/apply`, body)

        .then((res) => {
          console.log(res.data)
          goToCongratulations(history)
        })
    
        .catch((err) => {
          console.log(err.message)
        })
      }

      const listTripsSelect = useRequestDataGet(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
        []
        )
    
        useEffect(() => {
          
          setAllTripsSelect(listTripsSelect.trips)
          console.log(listTripsSelect.trips)
    
        }, [listTripsSelect.trips])

    return (

    <main>
        <section>
            <h2>Estamos felizes em te ter no nosso programa espacial</h2>
          
            <article>
                <label>Nome:</label>
                <input value={name} onChange={onChangeName}/>
            </article>

            <article>
                <label>Idade:</label>
                <input value={age} onChange={onChangeAge}/>
            </article>

            <article>
                <label>Por que você merece estar aqui?</label>
                <input value={application} onChange={onChangeApplication}/>
            </article>

            <article>
                <label>Profissão:</label>
                <input value={profession} onChange={onChangeProfession}/>
            </article>

            <article>
                <label>País:</label>
                <input value={country} onChange={onChangeCountry}/>
            </article>

            <article>
              <select value={planet} onChange={onChangePlanet}>
                {allTripsSelect ? allTripsSelect.map((trip) => {
                  console.log(trip.name)
                  return(
                      <option value={trip.name}>{trip.name}</option>
                  )
                }) : 
                    <option value="Buscando Viagens...">Buscando Viagen</option>
                }

                
                {/*  */}
              </select>
            </article>

            <button onClick={() => applicationTest(planet, history)}>Enviar</button>
            
        </section>
    </main>

  )
}
