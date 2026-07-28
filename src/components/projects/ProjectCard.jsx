import "./ProjectCard.scss";

import { projectImages } from "../../assets/project";

import portfolioImage from "../../assets/project/portofolio.png";


function ProjectCard({ project }) {


  const technologies = project.technologies
    ?.split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);



  return (


    <article
      className={`projectCard ${
        project.id === 11  ? "projectCard--featured" : ""
      }`}
    >



      {
        project.id === 11 && (

          <span className="projectCard__featured">

            Proyecto destacado

          </span>

        )
      }





      <div className="projectCard__image">


        <img

          src={
            projectImages[project.id] || portfolioImage
          }

          alt={project.title}

        />


      </div>





      <div className="projectCard__content">


        <h3>

          {project.title}

        </h3>




        <p>

          {project.description}

        </p>





        <div className="projectCard__tags">


          {
            technologies?.map((tech) => (

              <span key={tech}>

                {tech}

              </span>

            ))
          }


        </div>






        <div className="projectCard__buttons">


          <a

            href={project.demoUrl || project.githubUrl}

            target="_blank"

            rel="noreferrer"

          >

            Ver detalles →

          </a>


        </div>



      </div>



    </article>


  );

}


export default ProjectCard;