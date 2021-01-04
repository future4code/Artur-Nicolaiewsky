import React from 'react'
import './Etapas.css'
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasFechadas from './PerguntasFechadas'

 class EtapaUm extends React.Component {

    render() {

        return(
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <PerguntasAbertas pergunta={"1. Qual o seu nome?"}/>
                
                <PerguntasAbertas pergunta={"2. Qual o sua idade?"}/>

                <PerguntasAbertas pergunta={"3. Qual o seu email"}/>

                <PerguntasFechadas pergunta={"4. Qual a sua escolaridade"} 
                opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                    ]}/>
            </div>
        )

    }

}

export default EtapaUm