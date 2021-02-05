import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToLogin, goToHome, goToPainel} from '../Router/Coordinates'

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
`

const NavEmail = styled.p`
  margin: 0 22vw;
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

  return (
    <HeaderContainer>
      <Logo onClick={() => goToHome(history)}>LabeX</Logo>
     {

      token === null 
     
     ? 
     
      <NavButton onClick={() => goToLogin(history)}>Login</NavButton> 
     
     :
     
     
      <NavBox>
        <NavEmail>Bem vindo, {email}</NavEmail>
        <NavButton onClick={() => goToPainel(history)}>Painel de Controle</NavButton>
        <NavButton onClick={quit}>Sair</NavButton>
      </NavBox>

    } 
    </HeaderContainer>
  )
}