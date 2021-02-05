import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import {goToPainel} from '../Router/Coordinates'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 5vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align:center;
  align-items:center;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
  
  @media(max-width: 800px) {
      width: 80vw;
    }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align:center;
  align-items:center;

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

const Send = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin: 2vh 0;
 
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

export default function CreateTripPage() {

  const [inputTrip, onChangeInputTrip] = useInput({name: "", planet: "", date: "", description: "", durationInDays: ""})

  const token = localStorage.getItem("token")
  const history = useHistory()

  const createTrip = (event) => {

    event.preventDefault()

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips", inputTrip,
      {
        headers: {
          auth: token
        }
      }
    )
    .then((res) => {
      goToPainel(history)
    })

    .catch((err) => {
      console.log(err.message)
    })
  }
  
  var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  if(month < 10) {
    month = "0" + month
  }

  if(day < 10) {
    day = "0" + day
  }

  return (

    <MainContainer>
            <Title>Criar uma nova viagem espacial</Title>
          
          <Form onSubmit={createTrip}>
                <Label>Nome:</Label>
                <Input value={inputTrip.name} onChange={onChangeInputTrip} name={"name"}  pattern={"^.{2,}"} title={"O nome precisa ter 2 ou mais caracteres"} placeholder={"Ex: Missão COD"} required/>

                <Label>Planeta:</Label>
                <Input value={inputTrip.planet} onChange={onChangeInputTrip}  pattern={"^.{2,}"} title={"O planeta precisa ter 2 ou mais caracteres"} placeholder={"Ex: Terra"} name={"planet"} required/>

                <Label>Data:</Label>
                <Input value={inputTrip.date} onChange={onChangeInputTrip} type={"date"} name={"date"} min={`${year}-${month}-${day}`} title={"Apenas datas futuras"} required/>

                <Label>Descrição:</Label>
                <Input value={inputTrip.description} onChange={onChangeInputTrip} pattern={"^.{30,}"} title={"O nome precisa ter 30 ou mais caracteres"} name={"description"} placeholder={"Ex: Dê mais detalhes sobre a viagem"} required/>

                <Label>Duração:</Label>
                <Input value={inputTrip.durationInDays} onChange={onChangeInputTrip} min="50" name={"durationInDays"} type={"number"} placeholder={"Ex: 115"} required/>

            <Send>Criar</Send>
          </Form>
    </MainContainer>

  )
}
