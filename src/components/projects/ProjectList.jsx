import { useEffect, useState } from "react";

import {
  getFeaturedProjects,
  getProjects
} from "../../services/projectService";

import ProjectCard from "./ProjectCard";

import "./ProjectList.scss";

function ProjectList({ featured = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const request = featured
      ? getFeaturedProjects()
      : getProjects({ size: 24 }).then((page) => page.content);

    request
      .then((data) => {
        if (active) {
          setProjects(data);
        }
      })
      .catch(() => {
        if (active) {
          setError("No se pudieron cargar los proyectos.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [featured]);

  if (loading) {
    return (
      <p className="projectList__status">
        Cargando proyectos...
      </p>
    );
  }

  if (error) {
    return (
      <p className="projectList__status projectList__status--error">
        {error}
      </p>
    );
  }

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
