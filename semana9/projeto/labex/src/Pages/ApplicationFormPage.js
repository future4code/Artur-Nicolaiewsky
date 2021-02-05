import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import useInput from '../hooks/useInput'
import {goToCongratulations} from '../Router/Coordinates'
import axios from 'axios'
import {useState, useEffect} from 'react'
import useRequestDataGet from '../hooks/useRequestDataGet'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 10vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;

  
  @media(max-width: 800px) {
      width: 80vw;
    }
`

const Title = styled.h2`
  margin: 1rem;
`

const Label = styled.p`

`

const Input = styled.input`
  width: 20vw;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.1px grey;

  @media(max-width: 800px) {
      width: 40vw;
    }
`

const Select = styled.select`
  width: 22vw;
  padding: 0.8rem;
  margin-bottom: 2vh;
  border: none;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.1px grey;

  
  @media(max-width: 800px) {
      width: 45vw;
      margin-bottom: 3vh;
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

export default function ApplicationFormPage() {
    const [allTripsSelect, setAllTripsSelect] = useState([])
    const [inputToSub, onChangeInputToSub] = useInput({ name: "", age: "", applicationText: "", profession: "", country: ""})
    const [tripId, setTripId] = useState({})
    const [changed, setChanged] = useState()
    const [countrieList, setCountrieList] = useState()
    // const [verificated, setVerificated] =useState()

    const history = useHistory()

    const applicationTest = (event) => {

      if(changed === "changed"){
      event.preventDefault()
    
      axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips/${tripId}/apply`, inputToSub)

        .then((res) => {
          console.log(res.data)
          goToCongratulations(history)
        })
        .catch((err) => {
          console.log(err.message)
          alert("Selecione seu país")
        })
      } else {
        event.preventDefault()
        alert("Escolha uma viagem para participar")
      }
    }

    const listTripsSelect = useRequestDataGet(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips", []
    )
    
    useEffect(() => {
      setAllTripsSelect(listTripsSelect.trips)
      getCountries()
    }, [listTripsSelect.trips])


    const onChangePlanet = (event) => {
      setTripId(event.target.value)

      setChanged("changed")
    }

    const getCountries = () => {
      axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountrieList(res.data)
        setCountrieList && console.log(countrieList)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }

    return (

        <MainContainer>
            <Title>Estamos felizes em contar com você para o programa espacial</Title>
          
          <form onSubmit={applicationTest}>
                <Label>Nome Completo:</Label>
                  <Input value={inputToSub.name} onChange={onChangeInputToSub} pattern={"[a-zA-Z .]{5,}"} title={"O nome precisa ter 5 ou mais caracteres e não pode conter números"} name={"name"} placeholder={"Ex: Fulano de Tal"} required/>

                <Label>Idade:</Label>
                  <Input value={inputToSub.age} onChange={onChangeInputToSub} min="18" max="115" type="number" name={"age"} placeholder={"Ex: 21"} required/>

                <Label>Por que você merece estar aqui?</Label>
                  <Input value={inputToSub.application} onChange={onChangeInputToSub} pattern={"^.{30,}"} title={"A justificativa precisa ter 30 ou mais caracteres"} name={"applicationText"} placeholder={"Ex: Explique aqui"} required/>

                <Label>Profissão:</Label>
                  <Input value={inputToSub.profession} onChange={onChangeInputToSub}  pattern={"[a-zA-Z ]{5,}"} title={"A profissão precisa ter 5 ou mais caracteres e não pode conter números"} name={"profession"} placeholder={"Ex: Programador"} required/>

                <Label>País:</Label>
                  <Select onChange={onChangeInputToSub} name={"country"} required>
                <option selected disabled>Selecione seu país</option>
                {countrieList ? countrieList.map((country) => {
                  // console.log(trip.id)
                  return(
                      <option value={country.name}>{country.name}</option>
                  )
                }) : 
                    <option value="Buscando Países...">Buscando Países...</option>
                }
              </Select>

            <div>
              <Label>Viagem pretendida:</Label>
              <Select onChange={onChangePlanet} name={"planet"} required>
                <option selected disabled>Escolha uma viagem</option>
                {allTripsSelect ? allTripsSelect.map((trip) => {
                  // console.log(trip.id)
                  return(
                      <option value={trip.id}>{trip.name} - {trip.planet}</option>
                  )
                }) : 
                    <option value="Buscando Viagens...">"Buscando Viagens...</option>
                }
              </Select>
            </div>

            <Send>Enviar</Send>
          </form>
        </MainContainer>

  )
}
