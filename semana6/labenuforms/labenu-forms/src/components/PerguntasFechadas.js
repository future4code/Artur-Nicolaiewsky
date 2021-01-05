import React from 'react'
import './Etapas.css'

 class PerguntasFechadas extends React.Component {
    state = {value: '0'}

    handleChange = this.handleChange.bind(this)
    
    handleChange(event) {
        this.setState({value: event.target.value})
      }
    
    render() {

        console.log(this.state.value)

        return(
            <div>

                <label>{this.props.pergunta}</label>

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="0">{this.props.opcoes[0]}</option>
                        <option value="1">{this.props.opcoes[1]}</option>
                        <option value="2">{this.props.opcoes[2]}</option>
                        <option value="3">{this.props.opcoes[3]}</option>
                    </select>

            </div>
        )

    }

}

export default PerguntasFechadas