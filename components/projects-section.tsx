import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-title"
      className="projects"
      id="proyectos"
    >
      <SectionHeading
        description="Proyectos académicos y soluciones web en las que participé."
        eyebrow="Selección de trabajos"
        id="projects-title"
        title="Proyectos"
      />
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
