import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Matchs from './Components/Matchs/Matchs'
import axios from 'axios'

function App() {

  const [matchsOn, setMatchsOn] = useState(false)

  const callMatchs = () => {
    setMatchsOn(true)
  }

  const closeMatchs = () => {
    setMatchsOn(false)
  }

  
  const onClickReset = () => {
    if(window.confirm("Você tem certeza que quer apagar todos os matchs?")){
      axios
          .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear")
          .then((res) => {
            closeMatchs()
          })
          .catch((err) => {
              console.log(err.message)
          })
    }
  }

  if(matchsOn){
    return (
        <div className="App">
        
          <div className="Container">
          
            <div className="Header">
              <button className="Buttons" onClick={onClickReset}><img className="Images" src={'images/recycling-symbol.svg'}/></button>
              <button className="Buttons" onClick={closeMatchs}><img className="Images Arrow" src={'images/arrow.svg'}/></button>
            </div>
        
            <Matchs/>
          </div>

        </div>
    )
  } else {
    return(
        <div className="App">
        
          <div className="Container">
            <div className="Header">
              <button className="Buttons" onClick={onClickReset}><img className="Images" src={'images/recycling-symbol.svg'}/></button>
              <h1 className="Title">astromatch</h1>
              <button className="Buttons" onClick={callMatchs}><img className="Images" src={'images/love.svg'}/></button>
            </div>

            <Home/>

          </div>

        </div>
    )
  }
}

export default App;
