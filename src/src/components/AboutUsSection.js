import './Navbar';
import '../styles/aboutUsSection.css';

export default function AboutUsSection() {
    return (
        <div className="aboutUsSection" id="about-us">
            <div className="footer-container">
                <div className="about-us">
                    <h1>Sobre nós</h1>
                </div>
                <div className="footer-container-content">
                    <div className="content-footer">
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
                    </div>
                    <div className="content-footer-2">
                        <img src="/image-footer.svg" alt=""/>
                    </div>
                </div>
                <div className="footer" id="footer">
                    <div className="bg-footer">
                        <h1 className="footer-logo">CONECTA +</h1>
                        <div className="footer-images">
                            <a href="">
                                <img src="/2674096_object_email_web_essential_icon 1.svg" alt=""/>
                            </a>
                            <a href="">
                                <img src="/353422_facebook_logo_icon 1.svg" alt=""/>
                            </a>
                            <a href="">
                                <img src="/1161954_instagram_icon 1.svg" alt=""/>
                            </a>
                            <a href="">
                                <img src="/353425_linkedin_logo_icon 1.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}