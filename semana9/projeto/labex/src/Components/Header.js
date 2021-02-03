import {useHistory} from 'react-router-dom'
import {goToLogin, goToHome} from '../Router/Coordinates'

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
    <header>
      <button onClick={() => goToHome(history)}>LabeX</button>
     {token === null ? <button onClick={() => goToLogin(history)}>Login</button> : <div><p>{email}</p><button onClick={quit}>Sair</button></div>} 
    </header>
  )
}
