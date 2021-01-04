import React from 'react'
import './Etapas.css'

 class PerguntasAbertas extends React.Component {

    render() {

        return(
            <div>

                <label for="pergunta">{this.props.pergunta}</label>
                <input name="pergunta" />

            </div>
        )

    }

}

export default PerguntasAbertas