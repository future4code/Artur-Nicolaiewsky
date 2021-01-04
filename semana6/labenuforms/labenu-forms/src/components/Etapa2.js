import React from 'react'
import './Etapas.css'
import PerguntasAbertas from './PerguntasAbertas'

 class EtapaDois extends React.Component {

    render() {
        return(
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

                <PerguntasAbertas pergunta={"5. Qual o curso?"}/>
                
                <PerguntasAbertas pergunta={"6. Qual a unidade de unidade?"}/>

            </div>
        )

    }

}

export default EtapaDois