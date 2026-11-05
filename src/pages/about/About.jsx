import "./About.scss";
import Experience from "../../components/experience/Experience";
import elenaImage from "../../assets/images/bk-elena-02.jpg";
import {
  FaLightbulb,
  FaUsers,
  FaBug,
  FaArrowsRotate
} from "react-icons/fa6";

function About() {
  return (
    <section className="about">
      <div className="about__hero">
        <div className="about__image-wrapper">
          <img
            className="about__image"
            src={elenaImage}
            alt="Elena Almansa"
            width="1200"
            height="1600"
            loading="lazy"
            decoding="async"
          />
          <div className="about__image-text">
            <span>Artesanía del Software</span>
            <h1>Sobre mí</h1>
          </div>
        </div>

        <div className="about__hero-text">
          <h1 className="about__title">
            Artesanía del
            <span>Software.</span>
          </h1>
          <p className="about__intro">
            Con más de 20 años de experiencia en el ecosistema digital, mi
            trayectoria ha evolucionado desde los primeros días de la web hasta
            la arquitectura de sistemas Full Stack modernos. Mi enfoque no es
            solo escribir código, sino practicar lo que llamo la "Artesanía del
            Software": la creación minuciosa de soluciones que son tan robustas
            por dentro como elegantes por fuera.
          </p>
        </div>
      </div>

     <div className="about__strengths">


  <div className="about__card">

    <FaLightbulb className="strength__icon" />

    <div>

      <h3>
        Visión Estratégica
      </h3>

      <p>
        Capacidad para entender objetivos y crear soluciones digitales.
      </p>

    </div>

  </div>





  <div className="about__card">

    <FaUsers className="strength__icon" />

    <div>

      <h3>
        Mentoría
      </h3>

      <p>
        Comunicación y acompañamiento en equipos multidisciplinares.
      </p>

    </div>

  </div>





  <div className="about__card">

    <FaBug className="strength__icon" />

    <div>

      <h3>
        Resolución Crítica
      </h3>

      <p>
        Análisis y resolución de problemas técnicos complejos.
      </p>

    </div>

  </div>





  <div className="about__card">

    <FaArrowsRotate className="strength__icon" />

    <div>

      <h3>
        Adaptabilidad
      </h3>

      <p>
        Aprendizaje continuo y evolución tecnológica.
      </p>

    </div>

  </div>


</div>

      <a
        className="about__cv"
        href="/ELENA-ALMANSA-FULL-STACK-DEV.pdf"
        download
      >
        Descargar CV
      </a>

      <section className="about__experience">
       
        <Experience />
      </section>
      <section className="about__objective">

  <h2>
    Mi objetivo
  </h2>


  <p>

    Busco formar parte de un equipo donde pueda aportar mi experiencia
    como Webmaster y seguir creciendo como Full Stack Developer,
    participando en proyectos con impacto real.

  </p>


</section>
    </section>
  );
}

export default About;
