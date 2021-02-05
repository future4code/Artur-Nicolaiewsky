import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToLogin, goToHome, goToPainel} from '../Router/Coordinates'
import { useState } from 'react'

const HeaderContainer = styled.header`
  height: 5vh;
  display: flex;
  justify-content:space-between;
  margin: 0;
  padding: 2vh 5vw;
  background: white;
  box-shadow: 1px 1px 10px 1px black;
`

const NavBox = styled.nav`
  display: flex;
  align-items: center;

  
  @media(max-width: 800px) {
      display: none;
    }
`

const NavEmail = styled.p`
  margin: 0 22vw;

  
  @media(max-width: 800px) {
      display: none;
    }
`

const NavButton = styled.button`
  font-size: 1rem;
  background: none;
  border: none;;
  border-bottom: solid 1px;
  margin: 0 1vw;
  outline: none;
  cursor: pointer;

  &:hover{
    color: grey;
  }

  
  @media(max-width: 800px) {
      display: none;
    }
`

const NavButtonLogin = styled.button`
  font-size: 1rem;
  background: none;
  border: none;;
  border-bottom: solid 1px;
  margin: 0 1vw;
  outline: none;
  cursor: pointer;

  &:hover{
    color: grey;
  }
`

const Logo = styled.button`
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  outline: none;

  background: linear-gradient(blue 10%, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  &:hover {
  background: linear-gradient(red 10%, blue);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  }
`

const DropMenu = styled.select`
  display:none;
  
  @media(max-width: 800px) {
      display: initial;
    }
`

export default function Header() {

    const history = useHistory()
    
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")

    const quit  = () => {
      goToLogin(history)
      localStorage.removeItem("token")
      localStorage.removeItem("email")
      window.location.reload()
    }

    const onChangeFunction = (e) => {
      let valueFunction = e.target.value

      if(valueFunction === "1") {
        goToPainel(history)
      } else if(valueFunction === "2"){
        quit()
      }
    }

  return (
    <HeaderContainer>
      <Logo onClick={() => goToHome(history)} title="Voltar para o menu">LabeX</Logo>
     {

      token === null 
     
     ? 
     
      <NavButtonLogin onClick={() => goToLogin(history)}>Login</NavButtonLogin> 
     
     :
     
     <div>
      <NavBox>
        <NavEmail>Bem vindo, {email}</NavEmail>
        <NavButton onClick={() => goToPainel(history)}>Painel de Controle</NavButton>
        <NavButton onClick={quit}>Sair</NavButton>
      </NavBox>

      <DropMenu onChange={onChangeFunction}>
        <option selected disabled>Dropbox</option>
        <option value="1">Painel de Controle</option>
        <option value="2">Sair</option>
      </DropMenu>

      </div>
    } 
    </HeaderContainer>
  )
}