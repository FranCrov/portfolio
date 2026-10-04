import type { Project } from "@/data/projects";

type ProjectCardProps = {
  index: number;
  project: Project;
};

export function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className="project-card__number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      {project.status ? (
        <p className="project-card__status">{project.status}</p>
      ) : null}
      <p className="project-card__description">{project.description}</p>
      <ul
        aria-label={`Tecnologías de ${project.title}`}
        className="project-card__technologies"
      >
        {project.technologies.map((technology) => (
          <li key={`${project.title}-${technology}`}>{technology}</li>
        ))}
      </ul>
      <div className="project-card__links">
        {project.links.map((link) => (
          <a
            aria-label={`${link.label}: ${project.title}`}
            href={link.href}
            key={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}
