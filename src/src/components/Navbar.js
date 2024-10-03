import '../styles/navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-navbar">
                <h1>CONECTA +</h1>
            </div>
            <div className="links-navbar">
                <a href="#">Empresas que investem</a>
                <a href="#">ONGs Parceiras</a>
                <a href="#">Sobre nós</a>
                <a href="#">Contato</a>
            </div>
            <div className="buttons-navbar">
                <button>Login</button>
                <button>Cadastre-se</button>
            </div>
        </div>
    )
}

export default Navbar;