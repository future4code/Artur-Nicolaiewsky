import {Router} from './Router/Router'
import styled from 'styled-components'

const MainDiv = styled.div`
  min-height: 95vh;
  max-width: 100%;
  background-image: url("/bgg.svg");
  background-size: cover;
  background-position-y: 60%;
  background-attachment: fixed;
  padding-bottom: 5vh;
`

export default function App() {
  return (
    <MainDiv>
      <Router/>
    </MainDiv>
  )
}
