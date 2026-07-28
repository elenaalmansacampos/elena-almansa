import "./MobileMenu.scss";

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobileOverlay ${isOpen ? "mobileOverlay--show" : ""}`}
        onClick={onClose}
      />

      <aside className={`mobileMenu ${isOpen ? "mobileMenu--open" : ""}`}>

        <button
          className="mobileMenu__close"
          onClick={onClose}
        >
          ✕
        </button>

        <nav className="mobileMenu__nav">

          <a href="/" onClick={onClose}>
            Inicio
          </a>

          <a href="/about" onClick={onClose}>
            Sobre mí
          </a>

          <a href="/projects" onClick={onClose}>
            Proyectos
          </a>

          <a href="/contact" onClick={onClose}>
            Contacto
          </a>

        </nav>

      </aside>
    </>
  );
}

export default MobileMenu;