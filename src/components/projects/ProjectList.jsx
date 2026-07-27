import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import ProjectCard from "./ProjectCard";
import "./ProjectList.scss";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        console.log("RESPUESTA COMPLETA:", data);

        setProjects(data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("PROJECTS:", projects);

  return (
    <div className="projectList">
      <h3>PRUEBA PROJECT LIST</h3>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
