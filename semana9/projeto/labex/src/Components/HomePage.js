import styled from 'styled-components'
import useResquestDataGet from '../hooks/useRequestDataGet'

export default function HomePage() {

  const listTrips = useResquestDataGet(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
    []
    )

    
    console.log(listTrips)

  return (

    <main>
        <h1 lang="en">Welcome to LabeX</h1>
        <h2>A maior empresa de viagens espacias da galaxia!</h2>

        <section>
            <h2>Próximas viagens:</h2>
            <article>
                <p>Nome da missão(Marte)</p>
                <p>11/08/2021</p>
            </article>
            <button>Inscrever-se</button>
        </section>
    </main>

  )
}
