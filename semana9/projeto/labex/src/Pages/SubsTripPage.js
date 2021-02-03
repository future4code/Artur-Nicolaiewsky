import { useState } from 'react'
import styled from 'styled-components'


export default function SubsTripPage() {
  const [details, setDetails] = useState("none")

  const showDetails = () => {
    setDetails("initial")
  }

  const closeDetails = () => {
    setDetails("none")
  }

  const Sub = styled.div`
    display:${details};
  ` 

  return (
    
    <main>
        <section>      
            <h2>Inscrições para analise</h2>
            <div>
                <p>Helena Pera</p>
                <p>Ver detalhes</p>
            </div>

            <article>
                <p>Gerson</p>
                {details === "none" ? <button onClick={showDetails}>Ver detalhes</button> : <button onClick={closeDetails}>Fechar detalhes</button>}
            

                <Sub>
                  <div>
                    <p>Idade: 22 anos</p>
                    <p>Justificativa: Porque os jogadores de futebol vão dominar o mundo</p>
                    <p>Profissão: Jogador de futebol</p>
                    <p>País: Brasil</p>
                    <p>Viagem: 7 tons de plutão</p>
                  </div>
                  <div>
                    <button>Aprovar</button>
                    <button>Reprovar</button>
                  </div>
                </Sub>
            </article>
        </section>
    </main>

  )
}
