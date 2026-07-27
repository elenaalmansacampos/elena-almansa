import "./ProjectCard.scss";
import portfolioImage from "../../assets/images/portofolio.png";

function ProjectCard({ project }) {
  const technologies = project.technologies
    ?.split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);

  return (
    <article className="projectCard">
      <div className="projectCard__image">
        <img
          src={
            project.imageUrl?.startsWith("http")
              ? project.imageUrl
              : portfolioImage
          }
          alt={project.title}
        />
      </div>

      <div className="projectCard__content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="projectCard__tags">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="projectCard__buttons">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
