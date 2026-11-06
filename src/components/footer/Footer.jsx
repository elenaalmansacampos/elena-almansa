import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">

        <div className="footer__brand">
          <h3>Elena Almansa</h3>

          <p>
            Diseñando el futuro digital con precisión y elegancia.
          </p>
        </div>

        <nav className="footer__nav">
          <Link to="/about">Sobre mí</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contacto</Link>

          <a
            href="https://www.linkedin.com/in/elena-almansa-5315a017/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/elenaalmansacampos"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

      </div>

      <div className="footer__bottom">
        © 2026 Elena Almansa. Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;