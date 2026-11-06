import { fallbackProjects } from "../../data/fallbackProjects";
import ProjectCard from "./ProjectCard";

import "./ProjectList.scss";

function ProjectList({ featured = false }) {
  const projects = featured
    ? fallbackProjects.filter((project) => project.featured)
    : fallbackProjects;

  if (projects.length === 0) {
    return (
      <p className="projectList__status">
        No hay proyectos disponibles.
      </p>
    );
  }

  return (
    <div className="projectList">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
