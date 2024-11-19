import './Navbar';
import '../../styles/firstSection.css';
import styled from 'styled-components'
import Navbar from "./Navbar";
import bg from '../../public/bg.png'
import main from '../../public/main.jpg'
import company1 from '../../public/company1.svg'
import company2 from '../../public/company2.svg'
import company3 from '../../public/company3.svg'
import company4 from '../../public/company4.svg'

export default function FirstSection(name) {
    const FirstSection = styled.div`
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    `

    const MainContent = styled.div`
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Partners = styled.div`
        padding-top: 82px;
        display: flex;
        flex-direction: row;
        gap: 82px;
    `

    return (
        <FirstSection>
            <Navbar name={name} />
            <MainContent>
                <div className="main-image" id="partners">
                    <h1>Atitudes que fazem a diferença</h1>
                    <img src={main} alt="" />
                </div>
                <Partners>
                    <img src={company1} alt="" />
                    <img src={company2} alt="" />
                    <img src={company3} alt="" />
                    <img src={company4} alt="" />
                </Partners>
            </MainContent>
        </FirstSection>
    )
}