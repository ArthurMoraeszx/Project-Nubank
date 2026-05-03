export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="/images/logo-nu.png" alt="Nubank" className="logo"/>
            </div>
            <div>
                <ul className="nav-links">
                    <a href=""><li>Nubank</li></a>
                    <a href=""><li>Nubank Ultravioleta</li></a>
                    <a href=""><li>Nu Empresas</li></a>
                    <a href=""><li>Segurança</li></a>
                    <a href=""><li>Saiba Mais</li></a>
                </ul>
            </div>
            <div className="nav-right">
                <button className="btn-login">Login Empresas</button>
                <button className="btn-quero-ser">Quero ser Nubank</button>
            </div>
        </nav>
    )
}