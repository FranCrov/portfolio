import Image from "next/image";
import { Icon } from "@/components/icon";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project${project.wide ? " project--wide" : ""}`}
      data-reveal=""
      data-tone={project.tone}
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <div className="project__panel">
        <div aria-hidden="true" className="project__logo-layer">
          <Image
            alt=""
            className="project__logo"
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
            src={project.logo.src}
          />
        </div>
        <p className="project__panel-tag">{project.category}</p>
        <div className="project__panel-foot">
          <span>Proyecto {number}</span>
          {project.links[0] ? (
            <a
              aria-label={`Ver ${project.title}: ${project.links[0].label}`}
              className="project__arrow"
              href={project.links[0].href}
              rel="noopener noreferrer"
              tabIndex={-1}
              target="_blank"
            >
              <Icon name="arrowUpRight" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="project__body">
        <p className="project__meta">
          <span>{project.category}</span>
          {project.status ? (
            <span className="project__status">{project.status}</span>
          ) : null}
        </p>
        <h3>{project.title}</h3>
        <p className="project__description">{project.summary}</p>
        {project.detail ? (
          <p className="project__note">{project.detail}</p>
        ) : null}
        <ul
          aria-label={`Tecnologías de ${project.title}`}
          className="project__technologies"
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project__links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
              {link.label}
              <Icon name="arrowUpRight" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}