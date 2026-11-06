import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./MobileMenu.scss";

function MobileMenu({ isOpen, onClose }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstLinkRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`mobileOverlay ${isOpen ? "mobileOverlay--show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`mobileMenu ${isOpen ? "mobileMenu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <button
          type="button"
          className="mobileMenu__close"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <nav className="mobileMenu__nav">
          <Link ref={firstLinkRef} to="/" onClick={onClose}>
            Inicio
          </Link>
          <Link to="/about" onClick={onClose}>
            Sobre mí
          </Link>
          <Link to="/projects" onClick={onClose}>
            Proyectos
          </Link>
          <Link to="/contact" onClick={onClose}>
            Contacto
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default MobileMenu;
