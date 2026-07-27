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
          {/* Menú hamburguesa (solo móvil) */}
          <button
            className="header__menuButton"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Logo */}
          <Link to="/" className="header__logo">
            ELENA ALMANSA
          </Link>

          {/* Navegación Desktop */}
          <nav className="header__nav">
            <Link to="/">Inicio</Link>

            <Link to="/about">Sobre mí</Link>

            <Link to="/projects">Proyectos</Link>

            <Link to="/contact">Contacto</Link>
          </nav>

          {/* Avatar */}
          <Link
            to="/login"
            className="header__avatar"
            aria-label="Iniciar sesión"
          >
            <img src="/elena.png" alt="Elena Almansa" />
          </Link>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
