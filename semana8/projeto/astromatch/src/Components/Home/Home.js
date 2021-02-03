import React, { useState, useEffect } from 'react'
import {Image , Main, Footer, RedCrossButton, HeartButton, RedCrossImage, HeartImage, Buttons, Name, Description, ShadowBox, Bio} from './Styled-Home'
import axios from 'axios'
import Loading from '../../Components/Loading'


function Home(props) {
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        callProfile()
    }, [])


  const loadPage = () => {
    setIsLoading(false)
  }

    const callProfile = () => {

        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((res) => {
            setProfile(res.data.profile)
            console.log(res.data)
            loadPage()
        })
        .catch((err) => [
            console.log(err.message)
        ])
    }

    const chooseProfile = (id, boolean) => {
        const body = {
            id: id,
            choice: boolean
        }

        console.log(id, boolean)

        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
        .then((res) => {
            console.log(res.data)
            callProfile()
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

  return (
    <Main>
    
    {isLoading ? <Loading/> :
    
    <Main>
            <Image src={profile.photo}/>
        <ShadowBox>
        </ShadowBox>
        <Footer>
            <Description>
                <Name>{profile.name}, {profile.age}</Name>
                <Bio>{profile.bio}</Bio>
            </Description>

            <Buttons>
                <RedCrossButton onClick={() => chooseProfile(profile.id, false)}><RedCrossImage src={'https://svg-clipart.com/svg/white/wKV9KnE-cross-vector.svg'} alt={'xis vermelho'}/></RedCrossButton>
                <HeartButton onClick={() => chooseProfile(profile.id, true)}><HeartImage src={'https://svg-clipart.com/svg/white/RmN9m5r-white-heart-vector.svg'} alt={'coração verde'}/></HeartButton>
            </Buttons>
        </Footer>
    </Main>
    }
    </Main>
  );
}

export default Home;