import styled from 'styled-components'
import Navbar from "../home/Navbar";
import bg from '../../public/bg-graphic.png'
import graph from '../../public/Imagem Grafico.png'

export default function Graphic() {
    const GraphicContainer = styled.div`
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    `

    const MainContent = styled.div`
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const H1 = styled.h1`
        display: flex;
        justify-content: center;
        margin-bottom: 52px;
    `

    return (
        <GraphicContainer>
            <Navbar name={true} />
            <MainContent>
                <H1>Um investimento, um futuro. Seja parte dessa história!</H1>
                <img src={graph}></img>
            </MainContent>
        </GraphicContainer>
    )
}