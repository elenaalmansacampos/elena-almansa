import { useEffect, useState } from "react";

import { getProjects } from "../../services/projectService";

import ProjectCard from "./ProjectCard";

import "./ProjectList.scss";


function ProjectList({ featured = false }) {


  const [projects, setProjects] = useState([]);




  useEffect(() => {


    getProjects()

      .then((data) => {

        console.log("PROJECTS:", data);

        setProjects(data);

      })


      .catch((error) => {

        console.error(
          "Error cargando proyectos:",
          error
        );

      });


  }, []);





  const displayedProjects = featured
  ? projects.filter(project =>
      [11,7,8,6,12,9].includes(project.id)
    )
  : projects;





  return (


    <div className="projectList">


      {
        displayedProjects.map((project) => (

          <ProjectCard

            key={project.id}

            project={project}

          />

        ))
      }


    </div>


  );

}


export default ProjectList;