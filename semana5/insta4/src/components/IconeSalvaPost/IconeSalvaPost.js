import React from 'react'
import './IconeSalvaPost.css'

export function IconeSalvaPost(props) {
	return <div className={'icon-save'}>
		<img alt={'Icone de salvar'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}