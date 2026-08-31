import Logo from "../assets/Logo.png"

function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="brand-wrap">
                    <img className="brand-mark" src={Logo} alt="Logo de la Marca" />

                    <h1 className="title">Crediby</h1>
                </div>

                <p className="subtitle">
                    Tu tarjeta de crédito y débito personalizable.
                </p>
            </div>
        </header>
    );
}

export default Header;