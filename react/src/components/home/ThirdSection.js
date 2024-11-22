import './Navbar';
import styled from 'styled-components';
import bg3 from '../../public/bg3.png';
import img from '../../public/Humanitarian Help-pana 1.svg';

export default function ThirdSection() {
    const ThirdSectionContainer = styled.div`
        height: 110vh;
        background-image: url(${bg3});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        position: relative;
        top: -10px;

        @media (max-width: 1024px) {
            height: auto; /* Ajusta a altura para telas menores */
            padding-bottom: 20px;
        }
    `;

    const HeaderInviteOng = styled.div`
        margin-top: 82px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;

        @media (max-width: 768px) {
            margin-bottom: 60px;
        }
    `;

    const HeaderText = styled.h1`
        color: #074173;
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

    const InviteOngContent = styled.div`
        color: #074173;
        padding-left: 300px;
        padding-right: 250px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        @media (max-width: 1024px) {
            padding-left: 50px;
            padding-right: 50px;
            flex-direction: column; /* Empilha as seções em dispositivos menores */
            gap: 20px;
        }

        @media (max-width: 768px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    `;

    const ContentOne = styled.div`
        flex: 3;

        @media (max-width: 768px) {
            text-align: center; /* Centraliza o texto em dispositivos menores */
        }
    `;

    const LiEl = styled.li`
        color: #074173;
        font-size: 16px;
        line-height: 1.6;

        @media (max-width: 1024px) {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }
    `;

    const ElP = styled.p`
        color: #074173;
        font-size: 14px;
        line-height: 1.6;

        @media (max-width: 1024px) {
            font-size: 12px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }
    `;

    const ElH3 = styled.h3`
        color: #074173;
        margin-bottom: 48px;
        font-size: 28px;

        @media (max-width: 1024px) {
            font-size: 24px;
        }

        @media (max-width: 768px) {
            font-size: 20px;
        }
    `;

    const ImageContainer = styled.div`
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;

            @media (max-width: 1024px) {
                max-width: 80%;
            }

            @media (max-width: 768px) {
                max-width: 70%;
            }

            @media (max-width: 480px) {
                max-width: 100%; /* Preenche o espaço disponível */
            }
        }
    `;

    return (
        <ThirdSectionContainer id="recipients">
            <HeaderInviteOng>
                <HeaderText>Seja uma ONG parceira</HeaderText>
            </HeaderInviteOng>
            <InviteOngContent>
                <ContentOne>
                    <ElH3>Fortalecendo a Transformação Social: Junte-se a uma Rede de Impacto</ElH3>
                    <ElP>
                        Como uma Organização Não Governamental (ONG) comprometida com o impacto positivo, você tem a
                        oportunidade de expandir sua capacidade de atuação ao se conectar com empresas que
                        compartilham dos mesmos valores e objetivos sociais. Nosso projeto oferece uma plataforma
                        inovadora que facilita parcerias estratégicas entre ONGs e empresas investidoras, criando
                        oportunidades de colaboração que vão além do financiamento.
                    </ElP>
                    <ul>
                        <LiEl>Investimentos direcionados</LiEl>
                        <LiEl>Visibilidade para a Organização e suas causas</LiEl>
                        <LiEl>Parcerias transformadoras</LiEl>
                        <LiEl>Transparência e autonomia</LiEl>
                    </ul>
                    <ElP>
                        Ao se juntar a nós, sua ONG se posiciona em uma rede de impacto que busca fortalecer as
                        comunidades, transformar realidades e construir um futuro mais justo e sustentável.
                        Convidamos você a fazer parte dessa jornada de transformação coletiva, onde empresas e ONGs
                        caminham lado a lado para maximizar o bem social.
                    </ElP>
                    <ElP>
                        Junte-se a nós e ajude a construir um amanhã melhor!
                    </ElP>
                </ContentOne>
                <ImageContainer>
                    <img src={img} alt="Ilustração ONG" />
                </ImageContainer>
            </InviteOngContent>
        </ThirdSectionContainer>
    );
}