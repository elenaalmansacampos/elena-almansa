import "./About.scss";
import Tech from "../../components/tech/TechCard";
import Experience from "../../components/experience/Experience";
import elenaImage from "../../assets/bk-elena-02.jpg";

function About() {
  return (
    <main className="about">

      <section className="about__hero">

        <div className="about__image-wrapper">

          <img
            className="about__image"
            src={elenaImage}
            alt="Elena Almansa"
          />

          <div className="about__image-text">

            <span>
              Artesanía del Software
            </span>

            <h1>
              Sobre mí
            </h1>

          </div>

        </div>


        <p className="about__intro">
          Combino la precisión de la ingeniería con la elegancia del diseño
          editorial para crear productos digitales que no solo funcionan, sino
          que cuentan una historia.
        </p>


        <p className="about__intro">
          Mi enfoque se basa en la "Artesanía del Software": cada línea de
          código es tratada con el mismo rigor que un diseño de alta gama,
          buscando siempre el equilibrio perfecto entre innovación tecnológica y
          usabilidad humana.

          <br />

          Durante más de 20 años he trabajado en proyectos web, creando,
          actualizando y optimizando sitios e-commerce corporativos,
          mejorando la experiencia de usuario y resolviendo necesidades
          técnicas.
        </p>

      </section>


      <section className="about__content">

        <div className="about__block about__experience">

          <h2>
            Mi trayectoria
          </h2>

          <Experience />

        </div>


        <div className="about__block">

          <h2>
            Tecnologías
          </h2>


          <div className="about__technologies">

            <Tech name="Java" />
            <Tech name="Spring Boot" />
            <Tech name="React" />
            <Tech name="JavaScript" />
            <Tech name="HTML" />
            <Tech name="CSS / SCSS" />
            <Tech name="PostgreSQL" />
            <Tech name="Git" />
            <Tech name="GitHub" />

          </div>

        </div>


        <div className="about__block about__block--highlight">

          <h2>
            Mi objetivo
          </h2>

          <p>
            Busco formar parte de un equipo donde pueda aportar mi experiencia
            en desarrollo web, seguir creciendo como Full Stack Developer y
            participar en proyectos con impacto real.
          </p>

        </div>


      </section>

    </main>
  );
}

export default About;