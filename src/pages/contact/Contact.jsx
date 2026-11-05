import ContactForm from "../../components/contact/ContactForm";

import sagradaImage from "../../assets/images/sagrada-familia-barcelona.jpg";

import {
  FaEnvelope,
  FaLocationDot,
  FaShareNodes
} from "react-icons/fa6";

import "./Contact.scss";

function Contact() {
  return (
    <main className="contact">
      <section className="contact__hero">
        <span className="contact__label">
          CONTACTO
        </span>

        <h1>
          Hablemos de tu
          <br />
          próximo gran
          <br />
          proyecto
        </h1>

        <p>
          ¿Tienes una idea, un proyecto digital o necesitas mejorar tu
          presencia online? Estoy disponible para colaborar en proyectos de
          desarrollo web y soluciones Full Stack.
        </p>
      </section>

      <section className="contact__content">
        <div className="contact__left">
          <section className="contact__info">
            <article className="contact__card">
              <div className="contact__icon">
                <FaEnvelope />
              </div>

              <div>
                <span>
                  EMAIL
                </span>

                <h3>
                  <a href="mailto:elenaalmansacampos@gmail.com">
                    elenaalmansacampos@gmail.com
                  </a>
                </h3>
              </div>
            </article>

            <article className="contact__card">
              <div className="contact__icon">
                <FaLocationDot />
              </div>

              <div>
                <span>
                  UBICACIÓN
                </span>

                <h3>
                  Barcelona, España
                  <br />
                  Remoto
                </h3>
              </div>
            </article>

            <article className="contact__card">
              <div className="contact__icon">
                <FaShareNodes />
              </div>

              <div>
                <span>
                  REDES
                </span>

                <h3 className="contact__links">
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
                </h3>
              </div>
            </article>
          </section>

          <div className="contact__image">
            <img
              src={sagradaImage}
              alt="Sagrada Familia Barcelona"
              width="640"
              height="530"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <section className="contact__form-card">
          <h2>
            Envía un mensaje
          </h2>

          <ContactForm buttonLabel="Enviar propuesta" />
        </section>
      </section>

      <section className="contact__map">
        <iframe
          title="Mapa Barcelona"
          src="https://www.google.com/maps?q=Barcelona&output=embed"
          loading="lazy"
        />
      </section>
    </main>
  );
}

export default Contact;
