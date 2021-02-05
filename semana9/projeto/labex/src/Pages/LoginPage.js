import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToPainel } from '../Router/Coordinates'
import useInput from '../hooks/useInput'
import axios from 'axios'
import {useEffect, useState} from 'react'
import React from 'react'

const MainContainer = styled.section`
  margin: auto;
  margin-top: 15vh;
  width: 27vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align:center;
  
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
  
  @media(max-width: 800px) {
      width: 70vw;
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

const Send = styled.button`
  width: 8vw;
  padding: 0.4rem;
  margin: 4vh;
 
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

const Sair = styled.button`
  border: none;
  background: none;
  color: red;
  cursor: pointer;
`


export default function LoginPage() {
  const [inputLogin, onChangeInputLogin] = useInput({email: "", password: ""})
  const [log, setLog] = useState(true)

  useEffect(() => {
    searchToken()
  }, [])

  const history = useHistory()

  const token = localStorage.getItem("token")

  const removeToken = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    searchToken()
    window.location.reload()
  }

  const searchToken = () => {
    if(token){
      setLog(false)
    } else {
      setLog(true)
    }
  }

  const login = (event) => {

    event.preventDefault()

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/login", inputLogin)

    .then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("email", inputLogin.email)
      goToPainel(history)
    })

    .catch((err) => {
      alert("Email ou senha incorretos")
    })
  }

  if(log) {

  return (

    <MainContainer>
        <section>
            <Title>Entre em sua conta</Title>
          
          <form onSubmit={login}>
            <div>
                <Label>Email:</Label>
                <Input value={inputLogin.email} onChange={onChangeInputLogin} name={"email"} placeholder={"Ex: email@hotmail.com.br"} required/>
            </div>

            <div>
                <Label>Senha:</Label>
                <Input value={inputLogin.password} onChange={onChangeInputLogin} type="password" placeholder={"Ex: Sua senha"} name={"password"} required/>
            </div>

            <Send>Entrar</Send>
          </form>
        </section>
    </MainContainer>

  )} else {
    return(
      <MainContainer>
          <section>
              <Title>Você já está logado</Title>

              <Send onClick={goToPainel}>Continuar</Send>

              <p>Caso queira entrar com outra conta, <Sair onClick={removeToken}>Clique Aqui</Sair></p>
              
          </section>
      </MainContainer>
    )
  }
}
