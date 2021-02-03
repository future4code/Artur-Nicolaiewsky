import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToPainel } from '../Router/Coordinates'


export default function LoginPage() {

  const history = useHistory()
  
  return (

    <main>
        <section>
            <h2>Entre em sua conta</h2>
          
            <article>
                <label>Email:</label>
                <input/>
            </article>

            <article>
                <label>Senha:</label>
                <input/>
            </article>

            <button onClick={() => goToPainel(history)}>Entrar</button>
            
        </section>
    </main>

  )
}
