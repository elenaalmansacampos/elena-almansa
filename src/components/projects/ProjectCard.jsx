import "./ProjectCard.scss";

import { getProjectImage } from "../../assets/project";

function ProjectCard({ project }) {
  const technologies = project.technologies
    ?.split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);

  const link = project.demoUrl || project.githubUrl;

  return (
    <article
      className={`projectCard ${
        project.featured ? "projectCard--featured" : ""
      }`}
    >
      {project.featured && (
        <span className="projectCard__featured">
          Proyecto destacado
        </span>
      )}

      <div className="projectCard__image">
        <img
          src={getProjectImage(project)}
          alt={project.title}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="projectCard__content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="projectCard__tags">
          {technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {link && (
          <div className="projectCard__buttons">
            <a href={link} target="_blank" rel="noreferrer">
              Ver detalles →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
