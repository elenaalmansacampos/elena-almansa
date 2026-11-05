import "./Home.scss";

import Button from "../../components/button/Button";
import ProjectList from "../../components/projects/ProjectList";
import TechCard from "../../components/tech/TechCard";
import Tag from "../../components/tag/Tag";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";

import { Link } from "react-router-dom";

import elenaImage from "../../assets/images/bk-elena.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql
} from "react-icons/si";



function Home() {


  return (

    <>


      {/* HERO */}


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


            <Button variant="primary" href="/projects">

              Ver proyectos

            </Button>



            <Button variant="secondary" href="#contact">

              Contactar

            </Button>



          </div>


        </div>


      </section>






      {/* ABOUT */}



      <section className="home-about">



        <div className="home-about__image">


          <div className="home-about__image-bg"></div>



          <img
            src={elenaImage}
            alt="Elena Almansa"
            width="1200"
            height="1600"
            loading="lazy"
            decoding="async"
          />



          <Tag>

            20+
            <br />
            años de experiencia

          </Tag>



        </div>






        <div className="home-about__content">


          <h2>

            Acerca de mí

          </h2>



          <p>

            Soy Webmaster con más de 20 años de experiencia en desarrollo,
            mantenimiento y gestión de sitios web corporativos.
            Actualmente estoy ampliando mi perfil como desarrolladora
            Full Stack creando aplicaciones web completas.

          </p>




          <p>

            Me apasiona aprender nuevas tecnologías, resolver problemas
            y crear soluciones digitales funcionales y accesibles.

          </p>



        </div>


      </section>







      {/* STACK */}



      <section className="stack">


        <div className="stack__header">


          <h2>

            Stack tecnológico

          </h2>



          <p>

            Herramientas y lenguajes que domino para construir
            el futuro digital.

          </p>


        </div>





        <div className="stack__cards">


          <TechCard
            name="HTML"
            icon={<FaHtml5 />}
          />


          <TechCard
            name="CSS"
            icon={<FaCss3Alt />}
          />


          <TechCard
            name="JavaScript"
            icon={<FaJs />}
          />


          <TechCard
            name="React"
            icon={<FaReact />}
          />


          <TechCard
            name="Java"
            icon={<FaJava />}
          />


          <TechCard
            name="Spring Boot"
            icon={<SiSpringboot />}
          />


          <TechCard
            name="PostgreSQL"
            icon={<SiPostgresql />}
          />


          <TechCard
            name="GitHub"
            icon={<FaGithub />}
          />



        </div>


      </section>








      {/* PROJECTS DESTACADOS */}



      <section className="home__projects">


        <h2>

          Mis proyectos

        </h2>




        <ProjectList featured />





        <Link
          to="/projects"
          className="home__projects-button"
        >

          Ver todos los proyectos →

        </Link>




      </section>








      {/* EXPERIENCE */}



      <Experience />








      {/* CONTACT */}



      <Contact />





    </>

  );

}


export default Home;