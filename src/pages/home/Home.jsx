import "./Home.scss";

function Home() {
  return (
    <section className="hero">

      <div className="hero__content">

        <p className="hero__greeting">
          Hola, soy Elena 👋
        </p>

        <h1 className="hero__title">
          Desarrolladora Full Stack Junior
        </h1>

        <p className="hero__description">
          Creo aplicaciones web modernas combinando frontend y backend,
          con especial interés en experiencias digitales limpias,
          funcionales y accesibles.
        </p>


        <div className="hero__buttons">

          <a 
            href="#projects" 
            className="button button--primary"
          >
            Ver proyectos
          </a>


          <a 
            href="#contact" 
            className="button button--secondary"
          >
            Contactar
          </a>

        </div>

      </div>


      <div className="hero__image">

        <div className="hero__image-placeholder">
          Foto
        </div>

      </div>


    </section>
  );
}

export default Home;