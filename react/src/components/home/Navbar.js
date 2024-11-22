import styled from 'styled-components';
import { Link } from "react-router-dom";

function Navbar(name) {
    const NavbarSection = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px;
        
        @media (max-width: 1444px) {
            padding: 20px;
        }

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: flex-start;
        }

        @media (max-width: 768px) {
            padding: 16px;
        }

        @media (max-width: 480px) {
            padding: 12px;
        }
    `;

    const LogoNavbar = styled.div`
        cursor: pointer;
        flex: auto;

        @media (max-width: 1024px) {
            margin-bottom: 16px;
        }

        @media (max-width: 480px) {
            font-size: 20px;
        }
    `;

    const LinksNavbar = styled.div`
        padding: 30px 0;
        cursor: pointer;
        font-weight: 500;
        flex: auto;
        display: flex;
        justify-content: center;
        gap: 66px;

        @media (max-width: 1444px) {
            gap: 50px;
        }

        @media (max-width: 1024px) {
            flex-wrap: wrap;
            gap: 30px;
            justify-content: flex-start;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }
    `;

    const ButtonsNavbarContainer = styled.div`
        flex: auto;
        display: flex;
        justify-content: flex-end;
        gap: 8px;

        @media (max-width: 1024px) {
            margin-top: 16px;
            justify-content: center;
        }

        @media (max-width: 480px) {
            flex-direction: column;
            gap: 8px;
        }
    `;

    const ButtonsNavbar = styled.button`
        cursor: pointer;
        font-weight: 700;
        font-size: medium;
        padding: 4px 16px;
        height: 40px;
        background-color: #C5FF95;
        color: #074173;
        border: none;
        border-radius: 4px;

        @media (max-width: 1024px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            width: 100%; /* Preenche o espaço disponível */
        }
    `;

    const Anchor = styled.a`
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    `;

    return (
        <NavbarSection>
            <LogoNavbar>
                <h1>CONECTA +</h1>
            </LogoNavbar>
            <LinksNavbar>
                <Link to={'/'} style={{ 'textDecoration': 'none' }}>
                    <Anchor>Empresas que investem</Anchor>
                </Link>
                <Link to={'/'} style={{ 'textDecoration': 'none' }}>
                    <Anchor>Contato</Anchor>
                </Link>
                <Link to={'/graphic'} style={{ 'textDecoration': 'none' }}>
                    <Anchor>Veja seu futuro impacto</Anchor>
                </Link>
            </LinksNavbar>
            {name ? (
                <ButtonsNavbarContainer>
                    <Link to={'/register-company'}>
                        <ButtonsNavbar>Cadastre sua ONG</ButtonsNavbar>
                    </Link>
                    <Link to={'/list-companies'}>
                        <ButtonsNavbar>Invista em uma ONG</ButtonsNavbar>
                    </Link>
                </ButtonsNavbarContainer>
            ) : (
                <ButtonsNavbarContainer>
                    <Link to={'/login'}>
                        <ButtonsNavbar>Login</ButtonsNavbar>
                    </Link>
                    <Link to={'/register'}>
                        <ButtonsNavbar>Cadastre-se</ButtonsNavbar>
                    </Link>
                </ButtonsNavbarContainer>
            )}
        </NavbarSection>
    );
}

export default Navbar;