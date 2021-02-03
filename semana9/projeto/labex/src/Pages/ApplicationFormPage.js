import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToCongratulations} from '../Router/Coordinates'

export default function ApplicationFormPage() {

    const history = useHistory()

    return (

    <main>
        <section>
            <h2>Estamos felizes em te ter no nosso programa espacial</h2>
          
            <article>
                <label>Nome:</label>
                <input/>
            </article>

            <article>
                <label>Idade:</label>
                <input/>
            </article>

            <article>
                <label>Por que você merece estar aqui?</label>
                <input/>
            </article>

            <article>
                <label>Profissão:</label>
                <input/>
            </article>

            <article>
                <label>País:</label>
                <input/>
            </article>

            <article>
              <select>
                <option>Viagem 1</option>
                <option>Viagem 2</option>
                <option>Viagem 3</option>
              </select>
            </article>

            <button onClick={() => goToCongratulations(history)}>Enviar</button>
            
        </section>
    </main>

  )
}
