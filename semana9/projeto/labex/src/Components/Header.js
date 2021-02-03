import {useHistory} from 'react-router-dom'
import {goToLogin, goToHome, goToSubs} from '../Router/Coordinates'

export default function Header() {

    const history = useHistory()

  return (
    <header>
      <button onClick={() => goToHome(history)}>LabeX</button>
      <button onClick={() => goToLogin(history)}>Login</button>
      <button onClick={() => goToSubs(history)}>Notificações</button>
    </header>
  )
}
