import styled from 'styled-components'

import { Link } from "react-router-dom";

function Navbar(name) {
    const NavbarSection = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 24px;
        padding-right: 24px;
    `

    const LogoNavbar = styled.div`
        cursor: pointer;
        flex: auto;
    `

    const LinksNavbar = styled.div`
        padding-top: 30px;
        padding-bottom: 30px;
        cursor: pointer;
        font-weight: 500;
        flex: auto;
        display: flex;
        justify-content: center;
        gap: 66px;
    `

    const ButtonsNavbarContainer = styled.div`
        flex: auto;
        display: flex;
        justify-content: end;
        gap: 8px;
    `

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
    `

    const Anchor = styled.a`
        text-decoration: none;
        &hover: {
            cursor: pointer;
        }
    `

    return (
        <NavbarSection>
            <LogoNavbar>
                <h1>CONECTA +</h1>
            </LogoNavbar>
            <LinksNavbar>
                <Link to={'/'} style={{ 'textDecoration': 'none' }}>
                    <Anchor >Empresas que investem</Anchor>
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
            ) :
                (<ButtonsNavbarContainer>
                    <Link to={'/login'}>
                        <ButtonsNavbar>Login</ButtonsNavbar>
                    </Link>
                    <Link to={'/register'}>
                        <ButtonsNavbar>Cadastre-se</ButtonsNavbar>
                    </Link>
                </ButtonsNavbarContainer>)
            }
        </NavbarSection>
    )
}

export default Navbar;