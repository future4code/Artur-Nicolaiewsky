import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'

export default function CreateTripPage() {
  const [name, onChangeName] = useInput()
  const [planet, onChangePlanet] = useInput()
  const [data, onChangeData] = useInput()
  const [description, onChangeDescription] = useInput()
  const [duration, onChangeDuration] = useInput()


  const token = localStorage.getItem("token")

  const createTrip = () => {

    const body = {
      name: name,
      planet: planet,
      date: data,
      description: description,
      durationInDays: duration
    }

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips", body,
      {
        headers: {
          auth: token
        }
      }
    )
    .then((res) => {
      console.log(res.data)
    })

    .catch((err) => {
      console.log(err.message)
    })
  }

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
