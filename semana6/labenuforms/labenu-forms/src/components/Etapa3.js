import React from 'react'
import './Etapas.css'
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasFechadas from './PerguntasFechadas'

 class EtapaTres extends React.Component {

    render() {
        return(
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

                
                <PerguntasAbertas pergunta={"5. Por que você não terminou um curso de graduação?"}/>

                <PerguntasFechadas pergunta={"6. Você fez algum curso complementar?"} 
                opcoes={[
                    "Curso técnico",
                    "Cursos de inglês",
                    "Não fiz curso complementar"
                    ]}/>

            </div>
        )

    }

}

export default EtapaTres