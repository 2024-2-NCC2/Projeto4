import './Navbar';
import '../styles/secondSection.css';

export default function SecondSection() {
    return (
        <div className="secondSection" id="partners">
            <div className="invite-partner">
                <h1>Seja uma empresa investitora</h1>
            </div>
            <div className="invite-partner-content">
                <div className="content-partner">
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
                </div>
                <div className="content-partner-2">
                    <img src="/Live collaboration-cuate 1.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}