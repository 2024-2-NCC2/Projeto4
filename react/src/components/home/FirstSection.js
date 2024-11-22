import './Navbar';
import '../../styles/firstSection.css';
import styled from 'styled-components';
import Navbar from "./Navbar";
import bg from '../../public/bg.png';
import main from '../../public/main.jpg';
import company1 from '../../public/company1.svg';
import company2 from '../../public/company2.svg';
import company3 from '../../public/company3.svg';
import company4 from '../../public/company4.svg';

export default function FirstSection(name) {
    const FirstSection = styled.div`
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;

        @media (max-width: 1024px) {
            height: auto;
            padding-bottom: 20px;
        }
    `;

    const MainContent = styled.div`
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            margin-top: 80px;
        }

        @media (max-width: 480px) {
            margin-top: 60px;
        }
    `;

    const Partners = styled.div`
        padding-top: 82px;
        display: flex;
        flex-direction: row;
        gap: 82px;

        @media (max-width: 1024px) {
            gap: 50px;
            flex-wrap: wrap; /* Permite quebrar linha em tablets */
            justify-content: center; /* Centraliza os logos em telas menores */
        }

        @media (max-width: 768px) {
            gap: 30px;
            padding-top: 50px;
        }

        @media (max-width: 480px) {
            gap: 20px;
            padding-top: 30px;
        }
    `;

    const MainImage = styled.div`
        text-align: center;

        h1 {
            font-size: 36px;
            margin-bottom: 20px;

            @media (max-width: 1024px) {
                font-size: 32px;
            }

            @media (max-width: 768px) {
                font-size: 28px;
            }

            @media (max-width: 480px) {
                font-size: 24px;
            }
        }

        img {
            width: 100%;
            max-width: 600px;
            height: auto;

            @media (max-width: 768px) {
                max-width: 400px;
            }

            @media (max-width: 480px) {
                max-width: 300px;
            }
        }
    `;

    return (
        <FirstSection>
            <Navbar name={name} />
            <MainContent>
                <MainImage id="partners">
                    <h1>Atitudes que fazem a diferença</h1>
                    <img src={main} alt="Imagem principal" />
                </MainImage>
                <Partners>
                    <img src={company1} alt="Parceiro 1" />
                    <img src={company2} alt="Parceiro 2" />
                    <img src={company3} alt="Parceiro 3" />
                    <img src={company4} alt="Parceiro 4" />
                </Partners>
            </MainContent>
        </FirstSection>
    );
}