import styled from 'styled-components'
import useInput from '../hooks/useInput'
import useResquestDataPost from '../hooks/useRequestDataPost'

export default function CreateTripPage(onCreateTrip) {
  const [name, onChangeName] = useInput()
  const [planet, onChangePlanet] = useInput()
  const [data, onChangeData] = useInput()
  const [description, onChangeDescription] = useInput()
  const [duration, onChangeDuration] = useInput()

  const body = {
    name: name,
    planet: planet,
    data: data,
    description: description,
    duration: duration
  }

  const createTrip = useResquestDataPost(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
    body,
    Headers={
      Authorization: "JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
    },
    []
    )

  return (

    <main>
        <section>
            <h2>Estamos felizes em te ter no nosso programa espacial</h2>
          
            <article>
                <label>Nome:</label>
                <input value={name} onChange={onChangeName}/>
            </article>

            <article>
                <label>Planeta:</label>
                <input value={planet} onChange={onChangePlanet}/>
            </article>

            <article>
                <label>Data:</label>
                <input value={data} onChange={onChangeData}/>
            </article>

            <article>
                <label>Descrição:</label>
                <input value={description} onChange={onChangeDescription}/>
            </article>

            <article>
                <label>Duração:</label>
                <input value={duration} onChange={onChangeDuration}/>
            </article>

            <button onClick={createTrip}>Criar</button>
            
        </section>

      <useResquestDataPost />
    </main>

  )
}
