import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <button
            className="header__menuButton"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>

          <Link to="/" className="header__logo">
            ELENA ALMANSA
          </Link>

          <nav className="header__nav">
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre mí</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
          </nav>

          <div className="header__avatar" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}elena.png`}
              alt=""
              width="46"
              height="46"
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
