import styled from 'styled-components';
import './Navbar';
import bg4 from '../../public/bg4.png';
import img from '../../public/image-footer.svg';
import email from '../../public/2674096_object_email_web_essential_icon 1.svg';
import face from '../../public/353422_facebook_logo_icon 1.svg';
import insta from '../../public/1161954_instagram_icon 1.svg';
import lnk from '../../public/353425_linkedin_logo_icon 1.svg';

export default function AboutUsSection() {
    const AboutUsContainer = styled.div`
        height: 120vh;
        background-image: url('${bg4}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        top: -10px;

        @media (max-width: 1024px) {
            height: auto; /* Permite altura dinâmica em telas menores */
            padding-bottom: 20px;
        }
    `;

    const FooterBg = styled.div`
        display: flex;
        align-items: center;
        width: 80vw;
        height: 200px;
        border-radius: 20px;
        background-color: #1679AB;

        @media (max-width: 768px) {
            flex-direction: column; /* Empilha os elementos no footer */
            height: auto;
            padding: 20px;
        }

        @media (max-width: 480px) {
            width: 90vw;
        }
    `;

    const FooterSection = styled.div`
        display: flex;
        justify-content: center;
        padding-top: 300px;
        padding-bottom: 150px;

        @media (max-width: 768px) {
            padding-top: 150px;
            padding-bottom: 80px;
        }
    `;

    const FooterContainer = styled.div`
        color: #C5FF95;
        padding-left: 200px;
        padding-right: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 768px) {
            padding-left: 50px;
            padding-right: 50px;
        }

        @media (max-width: 480px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    `;

    const FooterLogo = styled.h1`
        padding-left: 150px;

        @media (max-width: 768px) {
            padding-left: 0;
            text-align: center;
        }
    `;

    const FooterImages = styled.div`
        display: flex;
        margin-left: auto;
        padding-right: 200px;
        gap: 24px;

        @media (max-width: 768px) {
            margin-left: 0;
            padding-right: 0;
            justify-content: center;
        }
    `;

    const Anchor = styled.a`
        text-decoration: none;
        color: white;

        &:hover {
            transform: scale(1.1);
        }
    `;

    return (
        <AboutUsContainer id='about-us'>
            <FooterContainer>
                <TextAboutUs />
                <FooterSection id="footer">
                    <FooterBg>
                        <FooterLogo>CONECTA +</FooterLogo>
                        <FooterImages>
                            <Anchor href="">
                                <img src={email} alt="Email Icon" />
                            </Anchor>
                            <Anchor href="">
                                <img src={face} alt="Facebook Icon" />
                            </Anchor>
                            <Anchor href="">
                                <img src={insta} alt="Instagram Icon" />
                            </Anchor>
                            <Anchor href="">
                                <img src={lnk} alt="LinkedIn Icon" />
                            </Anchor>
                        </FooterImages>
                    </FooterBg>
                </FooterSection>
            </FooterContainer>
        </AboutUsContainer>
    );
}

function TextAboutUs() {
    const HeaderContainer = styled.div`
        margin-top: 7vh;
        color: #C5FF95;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;

        @media (max-width: 768px) {
            margin-bottom: 50px;
        }
    `;

    const Header = styled.h1`
        font-weight: 700;
        font-size: 36px;

        @media (max-width: 1024px) {
            font-size: 32px;
        }

        @media (max-width: 768px) {
            font-size: 28px;
        }

        @media (max-width: 480px) {
            font-size: 24px;
            text-align: center;
        }
    `;

    const FooterContainer = styled.div`
        color: #C5FF95;
        padding-left: 100px;
        padding-right: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        @media (max-width: 768px) {
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    `;

    const FooterContent = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 130px;
        padding-right: 80px;

        @media (max-width: 768px) {
            padding-left: 0;
            padding-right: 0;
        }

        p {
            font-size: 16px;
            line-height: 1.5;

            @media (max-width: 1024px) {
                font-size: 14px;
            }

            @media (max-width: 768px) {
                font-size: 12px;
            }
        }
    `;

    const ImageContainer = styled.div`
        img {
            max-width: 100%;
            height: auto;

            @media (max-width: 768px) {
                max-width: 80%;
            }

            @media (max-width: 480px) {
                max-width: 100%;
            }
        }
    `;

    return (
        <>
            <HeaderContainer>
                <Header>Sobre nós</Header>
            </HeaderContainer>
            <FooterContainer>
                <FooterContent>
                    <p>
                        Somos um grupo de estudantes do Centro Universitário Álvares Penteado (FECAP), comprometidos
                        em promover um impacto positivo na sociedade. Nosso projeto foi criado com o objetivo de dar
                        mais visibilidade às Organizações Não Governamentais (ONGs) e facilitar o acesso delas a
                        investimentos de empresas privadas.
                    </p>
                    <p>
                        Acreditamos no poder das parcerias entre ONGs e o setor empresarial para transformar
                        comunidades e criar soluções que beneficiem a todos. Com essa iniciativa, buscamos aproximar
                        quem deseja contribuir para um mundo melhor, promovendo o crescimento conjunto e a
                        valorização do impacto social.
                    </p>
                </FooterContent>
                <ImageContainer>
                    <img src={img} alt="Sobre nós imagem" />
                </ImageContainer>
            </FooterContainer>
        </>
    );
}