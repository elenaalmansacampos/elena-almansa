import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import ProjectCard from "./ProjectCard";
import "./ProjectList.scss";


function ProjectList() {


  const [projects, setProjects] = useState([]);



  useEffect(() => {


    getProjects()

      .then((data) => {

        setProjects(data);

      })

      .catch((error) => {

        console.error(error);

      });


  }, []);



  return (

    <div className="projectList">


      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />

      ))}


    </div>

  );


}


export default ProjectList;