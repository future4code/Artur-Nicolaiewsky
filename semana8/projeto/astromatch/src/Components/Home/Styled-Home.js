import styled from 'styled-components'

export const Image = styled.img`
    height: 60vh;
    width: 25vw;
    box-shadow: 1px 1px 10px 1px grey;
    object-fit: cover;
    z-index: -1;
`

export const ShadowBox = styled.div`
    height: 60vh;
    width: 25vw;
    position: absolute;
    top: 18vh;
    background: linear-gradient(transparent 70%, black);
    opacity: 0.4;
    margin: 0 2.5vw;
    z-index: 1;
`

export const Main = styled.div`
    height: 76vh;
    width: 30vw;
`

export const Description = styled.div`
    position: absolute;
    top: 63vh;
    left: 40vw;
    width: 18vw;
    color: white;
    z-index: 3;
    text-align: start;
`

export const Footer = styled.div`
    margin-top: 2vh;
    padding: 2vh;

    border-top: solid 1px grey;
`

export const RedCrossButton = styled.button`
    background: red;
    border: none;
    border-radius: 50%;
    margin-right: 3vw;
    height: 9vh;
    width: 9vh;
    outline: none;
    box-shadow: 5px 5px 15px 0.5px red;
    cursor: pointer;

`
export const HeartButton = styled.button`
    background-color: green;
    border: none;
    border-radius: 50%;
    height: 9vh;
    width: 9vh;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    box-shadow: 5px 5px 15px 0.5px green;
    cursor: pointer;
`

export const RedCrossImage = styled.img`
    height: 3.5vh;

    &:hover {
        height: 4.5vh;
    }
`

export const HeartImage = styled.img`
    height: 4vh;

     &:hover {
        height: 5vh;
    
    }

`

export const Buttons = styled.div`
    
    display: flex;
    justify-content: center;
    outline: none;
`

export const Name = styled.p`
    font-size: 1.3rem;
    font-weight: bold; 
    margin: 0;
`

export const Bio = styled.p`
    margin-top: 1vh;
`