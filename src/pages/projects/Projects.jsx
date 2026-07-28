import "./Projects.scss";

import ProjectList from "../../components/projects/ProjectList";


function Projects() {


  return (

    <main className="projects">


      {/* HERO */}

      <section className="projects__hero">


        <span className="projects__label">
          PORTFOLIO EXCLUSIVO
        </span>


        <h1>
         Mis Proyectos 
        </h1>


        <p>

          Una exploración de soluciones técnicas de alto rendimiento,
          donde el diseño refinado se encuentra con la excelencia
          arquitectónica. Especializada en ecosistemas digitales
          escalables y experiencias de usuario inmersivas.

        </p>


      </section>





      {/* PROYECTOS */}

      <section className="projects__list">


        <ProjectList />


      </section>





      {/* CALIDAD */}

      <section className="projects__quality">


        <h2>
          Compromiso con la Calidad
        </h2>



        <div className="projects__quality-grid">


          <article>

            <h3>
              Performance
            </h3>

            <p>
              Optimización crítica de tiempos de carga y respuesta.
            </p>

          </article>




          <article>

            <h3>
              Seguridad
            </h3>

            <p>
              Implementación de estándares modernos de protección.
            </p>

          </article>




          <article>

            <h3>
              Escalabilidad
            </h3>

            <p>
              Arquitecturas preparadas para crecimiento y alta demanda.
            </p>

          </article>


        </div>


      </section>


    </main>

  );

}


export default Projects;