import './Navbar';
import styled from 'styled-components'
import bg3 from '../../public/bg3.png'
import img from '../../public/Humanitarian Help-pana 1.svg'

export default function ThirdSection() {
    const ThirdSectionContainer = styled.div`
        height: 110vh;
        background-image: url(${bg3});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    `

    const HeaderInviteOng = styled.div`
        margin-top: 82px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    `

    const HeaderText = styled.h1`
        color: #074173;
    `

    const InviteOngContent = styled.div`
        color: #074173;
        padding-left: 300px;
        padding-right: 250px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `

    const ContentOne = styled.div`
        flex: 3;
    `

    const LiEl = styled.li`
            color: #074173;
    `

    const ElP = styled.p`
        color: #074173;
        text-size: 14px;
    `

    const ElH3 = styled.h3`
        color: #074173;
        margin-bottom: 48px;
    `

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
                        <LiEl>Ivestimentos direcionados</LiEl>
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
                <div>
                    <img src={img} alt=""/>
                </div>
            </InviteOngContent>
        </ThirdSectionContainer>
    )
}