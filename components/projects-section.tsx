import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-title"
      className="section section--panel"
      id="proyectos"
    >
      <div className="shell">
        <div className="section__head">
          <div>
            <span className="section__eyebrow">Selección de trabajos</span>
            <h2 id="projects-title">Proyectos</h2>
          </div>
          <p className="section__lede">
            Tres proyectos que muestran cómo trabajo: un panel de datos con
            reportes, un sitio institucional con catálogo y una plataforma de
            comercio electrónico.
          </p>
        </div>
        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}