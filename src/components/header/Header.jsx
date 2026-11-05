import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import MobileMenu from "./MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* Menú hamburguesa (solo móvil) */}
          <button
            className="header__menuButton"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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

            {isAuthenticated && (
              <Link to="/admin">Admin</Link>
            )}

            {isAuthenticated && (
              <button
                type="button"
                className="header__logout"
                onClick={logout}
              >
                Salir
              </button>
            )}
          </nav>

          {/* Avatar */}
          <Link
            to={isAuthenticated ? "/admin" : "/login"}
            className="header__avatar"
            aria-label={isAuthenticated ? "Ir al panel de administración" : "Iniciar sesión"}
          >
            <img
              src="/elena.png"
              alt="Elena Almansa"
              width="46"
              height="46"
            />
          </Link>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
