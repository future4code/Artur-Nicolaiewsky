import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/20800075_1124342047699499_6395856514030794579_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEHjqveKEpIqpxPcCNscrSojaDEcmRWkRmNoMRyZFaRGb06JdWGIEbW8LuuasYsPPdjh6yiNhQRnEbDqi62MNP1&_nc_ohc=Aj6juWjWW4YAX_oC_KF&_nc_ht=scontent.fpoa4-1.fna&oh=4c05bd85a85edcef03b64fc24587eecc&oe=5FFCD9B7" 
          nome="Artur Nicolaiewsky Pellicioli" 
          descricao="Olá, eu sou o Artur, desenvolvedor web em constate desenvolvimento full-stack, sou do Rio Grande do Sul e tento sempre que possível estar aprendendo e me profissionalizando mais."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="data:image/png;base64,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"
          tipo="Email: "
          texto="arturpellicioli@hotmail.com"
        />

        <CardPequeno
          imagem="data:image/png;base64,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"
          tipo="Endereço: "
          texto="Porto Alegre - RS"
        />
      </div>

      <div className="page-section-container">
        <h2>Estudos</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando Full-Stack da Labenu." 
        />
        
        <CardGrande 
          imagem="https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/128903467_3499360473511838_3377729555727400573_n.png?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG8c1GZYsHQKTzcOM4Wd2S4a8kvgR1z8QZryS-BHXPxBke_9NPN7vVM_TOl-HHMh8uihwo18IRkS3CgO6WWlysf&_nc_ohc=H_ustEL2HIcAX_TETMl&_nc_ht=scontent.fpoa4-1.fna&oh=f69a1ba33f65ba32058a49c635b3564d&oe=5FFF2F29" 
          nome="Alura" 
          descricao="Curso de Front-end completo da Alura." 
        />
      </div>

      <div className="page-section-container">
        <h2>Projetos Recentes</h2>

        <CardPequeno
          imagem="data:image/png;base64,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"
          tipo="Github: "
          texto="Veja meus projetos recentes"
        />              
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
