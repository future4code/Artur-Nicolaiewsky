import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvo from '../../img/save.svg'
import iconeNaoSalvo from '../../img/nosave.svg'
import iconeCompartilhado from '../../img/compartilhar.svg'

import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 3,
    comentando: false,
    numeroComentarios: 3,
    salvo: true,
    compartilhar: false
  }

  onClickCurtida = () => {

    if(!this.state.curtido){
      console.log('Curtiu!')

      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
    })} else {
      console.log('Descurtiu!')

      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })}
    }
    
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) { 
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvamento

    if(this.state.salvo) {
      iconeSalvamento = iconeSalvo
    } else {
      iconeSalvamento = iconeNaoSalvo
    }

    let compartilhamentoAberto

    if(this.state.compartilhar) { 
      compartilhamentoAberto = <SecaoCompartilhar />
    }



    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <div className={'footer-left'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        <div className="footer-right">
          <IconeComContador
            icone={iconeSalvamento}
            onClickIcone={this.onClickSalvar}
          />
          
          <IconeComContador
            icone={iconeCompartilhado}
            onClickIcone={this.onClickCompartilhar}
          />
        </div>
      </div>
      {componenteComentario}
      {compartilhamentoAberto}
    </div>
  }
}

export default Post