import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {goToApplication} from '../Router/Coordinates'
import useResquestDataGet from '../hooks/useRequestDataGet'
import { useEffect, useState } from 'react'

export default function HomePage() {

    const history = useHistory()

  return (

    <main>
        <section>
            <h1 lang="en">Welcome to LabeX</h1>
            <h2>A maior empresa de viagens espacias da galaxia!</h2>
            <img/>
            <button onClick={() => goToApplication(history)}>Inscrever-se</button>
        </section>
    </main>

  )
}
