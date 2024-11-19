import styled from 'styled-components'
import './Navbar';
import bg2 from '../../public/bg2.png'
import img from '../../public//Live collaboration-cuate 1.svg'

export default function SecondSection() {
    const SencondSectionContainer = styled.div`
        height: 100vh;
        background-image: url(${bg2});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    `

    const Header = styled.div`
        margin-top: 82px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    `

    const InvitePartnerContent = styled.div`
        padding-left: 257px;
        padding-right: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `

    const FirstContentSection = styled.div`
        flex: 2;
    `
    
    const SecondContentSection = styled.div`
        flex: 3;
        display: flex;
        justify-content: center;
    `

    return (
        <SencondSectionContainer id="partners">
            <Header>
                <h1>Seja uma empresa investitora</h1>
            </Header>
            <InvitePartnerContent>
                <FirstContentSection>
                    <h3>Conectando impactos social e crescimento empresarial</h3>
                    <p>
                        Empresas investidoras desempenham um papel fundamental ao
                        impulsionar mudanças positivas em suas comunidades. Ao direcionar
                        capital para Organizações Não Governamentais (ONGs), essas
                        empresas não apenas contribuem para o bem social, mas também
                        alinham seus valores corporativos com causas relevantes e
                        transformadoras.
                    </p>
                    <p>
                        Nosso algoritmo exclusivo facilita essa conexão ao combinar os
                        objetivos das ONGs cadastradas com os interesses estratégicos de
                        cada investidor. Isso garante que o capital seja direcionado para
                        iniciativas que reflitam o que as empresas realmente buscam,
                        maximizando o impacto social e o retorno intangível.
                    </p>
                    <p>
                        Além de investir financeiramente, as empresas podem estabelecer
                        parcerias que vão além do capital. As ONGs e seus voluntários têm
                        a oportunidade de colaborar diretamente com as empresas,
                        promovendo ações internas que reforçam a conscientização e
                        incentivam o voluntariado corporativo.
                    </p>
                    <p>
                        Outro benefício estratégico é a possibilidade de as empresas
                        direcionarem parte de seus impostos para essas causas sociais,
                        escolhendo exatamente onde e como seu investimento será aplicado.
                        Isso oferece uma maneira eficaz de maximizar o retorno social e
                        construir uma marca fortemente alinhada com a responsabilidade
                        social corporativa.
                    </p>
                </FirstContentSection>
                <SecondContentSection>
                    <img src={img} alt=""/>
                </SecondContentSection>
            </InvitePartnerContent>
        </SencondSectionContainer>
    )
}