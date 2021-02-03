import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import {Image, Profile, Main, Name} from './Styled-Matchs'

export default function Matchs() {

    const [matchs, setMatchs] = useState([])

    const [matchNumber, setMatchNumber] = useState(0)

    useEffect(() => {
        callMatchs()
    }, [])
    
    const callMatchs = () => {

        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((res) => {
            setMatchs(res.data.matches)
            setMatchNumber(res.data.matches.length)
        })
        .catch((err) => [
            console.log(err.message)
        ])
    }

    if(matchNumber === 0) {
                return (
                    <Main>

                        <h1 className="Title">Seus Matchs</h1>
                        <div>
                            <p> Não há matchs ainda </p>
                            <p>Mas não pare de procurar, o amor está no Astromatch!</p>
                            </div>

                        </Main>
                    )
            } else {

  return (
      <Main>

        <h1 className="Title">Seus Matchs</h1>
        
          {matchs.map((match) => {
              return(
                  <Profile>
                    <Image src={match.photo}/>
                        <Name>{match.name}</Name>
                  </Profile>
              )
          })}
      </Main>
  )
}
}