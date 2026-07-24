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
            <a href="#home">Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>

          {/* Avatar */}
          <Link
            to="/login"
            className="header__avatar"
            aria-label="Iniciar sesión"
          >
            <img
              src="/elena.png"
              alt="Elena Almansa"
            />
          </Link>

        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;