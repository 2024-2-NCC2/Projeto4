import styled from 'styled-components';
import './Navbar';
import bg4 from '../../public/bg4.png'
import img from '../../public/image-footer.svg'
import email from '../../public/2674096_object_email_web_essential_icon 1.svg'
import face from '../../public/353422_facebook_logo_icon 1.svg'
import insta from '../../public/1161954_instagram_icon 1.svg'
import lnk from '../../public/353425_linkedin_logo_icon 1.svg'

export default function AboutUsSection() {
    const AboutUsContainer = styled.div`
        height: 120vh;
        background-image: url('${bg4}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `

    const FooterBg = styled.div`
        display: flex;
        align-items: center;
        width: 80vw;
        height: 200px;
        border-radius: 20px;
        background-color: #1679AB;
    `

    const FooterSection = styled.div`
        display: flex;
        justify-content: center;
        padding-top: 300px;
        padding-bottom: 150px;
    `

    const FooterContainer = styled.div`
        color: #C5FF95;
        padding-left: 200px;
        padding-right: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const FooterLogo = styled.h1`
        padding-left: 150px;
    `

    const FooterImages = styled.div`
        display: flex;
        margin-left: auto;
        padding-right: 200px;
        gap: 24px;
    `

    const Anchor = styled.a`
        text-decoration: none;
        color: white;

        &:hover {
            transform: scale(1.1);
        }
    `

    return (
        <AboutUsContainer id='about-us'>
            <FooterContainer>
                <TextAboutUs />
                <FooterSection id="footer">
                    <FooterBg>
                        <FooterLogo>CONECTA +</FooterLogo>
                        <FooterImages>
                            <Anchor href="">
                                <img src={email} alt="" />
                            </Anchor>
                            <Anchor href="">
                                <img src={face} alt="" />
                            </Anchor>
                            <Anchor href="">
                                <img src={insta} alt="" />
                            </Anchor>
                            <Anchor href="">
                                <img src={lnk} alt="" />
                            </Anchor>
                        </FooterImages>
                    </FooterBg>
                </FooterSection>
            </FooterContainer>
        </AboutUsContainer>
    )
}

function TextAboutUs() {
    const HeaderContainer = styled.div`
        margin-top: 7vh;
        color: #C5FF95;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    `

    const Header = styled.h1`
        text-weigth: 700;
    `

    const FooterContainer = styled.div`
        color: #C5FF95;
        padding-left: 100px;
        padding-right: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `

    const FooterContent = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 130px;
        padding-right: 80px;
    `

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
                <div>
                    <img src={img} alt="" />
                </div>
            </FooterContainer>
        </>
    )
}