import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToPainel } from '../Router/Coordinates'
import useInput from '../hooks/useInput'
import axios from 'axios'
import {useEffect, useState} from 'react'
import React from 'react'


export default function LoginPage() {
  const [email, setEmail] = useInput()
  const [password, setPassword] = useInput()
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

  const login = (history) => {

    const body = {
      email: email,
      password: password
    }

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/login", body)

    .then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("email", email)
      goToPainel(history)
      window.location.reload()
    })

    .catch((err) => {
      alert("Email ou senha incorretos")
    })
  }

  if(log) {

  return (

    <main>
        <section>
            <h2>Entre em sua conta</h2>
          
            <article>
                <label>Email:</label>
                <input value={email} onChange={setEmail}/>
            </article>

            <article>
                <label>Senha:</label>
                <input value={password} onChange={setPassword} type="password"/>
            </article>

            <button onClick={() => login(history)}>Entrar</button>
            
        </section>
    </main>

  )} else {
    return(
      <main>
          <section>
              <h2>Você já está logado</h2>

              <button onClick={() => goToPainel(history)}>Continuar</button>

              <p>Caso queira entrar com outra conta, <button onClick={removeToken}>Clique Aqui</button></p>
              
          </section>
      </main>
    )
  }
}
