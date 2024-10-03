import './Navbar';
import '../styles/thirdSection.css';

export default function ThirdSection() {
    return (
        <div className="thirdSection" id="recipients">
            <div className="invite-ong">
                <h1>Seja uma ONG parceira</h1>
            </div>
            <div className="invite-ong-content">
                <div className="content-ong">
                    <h3>Fortalecendo a Transformação Social: Junte-se a uma Rede de Impacto</h3>
                    <p>
                        Como uma Organização Não Governamental (ONG) comprometida com o impacto positivo, você tem a
                        oportunidade de expandir sua capacidade de atuação ao se conectar com empresas que
                        compartilham dos mesmos valores e objetivos sociais. Nosso projeto oferece uma plataforma
                        inovadora que facilita parcerias estratégicas entre ONGs e empresas investidoras, criando
                        oportunidades de colaboração que vão além do financiamento.
                    </p>
                    <ul>
                        <li>Ivestimentos direcionados</li>
                        <li>Visibilidade para a Organização e suas causas</li>
                        <li>Parcerias transformadoras</li>
                        <li>Transparência e autonomia</li>
                    </ul>
                    <p>
                        Ao se juntar a nós, sua ONG se posiciona em uma rede de impacto que busca fortalecer as
                        comunidades, transformar realidades e construir um futuro mais justo e sustentável.
                        Convidamos você a fazer parte dessa jornada de transformação coletiva, onde empresas e ONGs
                        caminham lado a lado para maximizar o bem social.
                    </p>
                    <p>
                        Junte-se a nós e ajude a construir um amanhã melhor!
                    </p>
                </div>
                <div className="content-ong-2">
                    <img src="/Humanitarian Help-pana 1.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}