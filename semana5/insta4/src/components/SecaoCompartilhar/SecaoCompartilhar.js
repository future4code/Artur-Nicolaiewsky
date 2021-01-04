import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {
	state = {
	}

	render() {
		return <div className={'comment-container'}>
            <div className="redes-sociais">
                <p>Compartilhe em:</p>
                <p onClick="">Instagram</p>
                <p onClick="">Facebook</p>
                <p onClick="">Twitter</p>
            </div>
		</div>
	}

}
