import { ThemeToggle } from "./theme-toggle";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#inicio">
            FC<span aria-hidden="true">.</span>
          </a>
          <nav aria-label="Navegación principal" className="site-nav">
            <a aria-current="page" href="#inicio">
              Inicio
            </a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="page-shell" id="contenido">
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <div className="hero__content">
            <p className="hero__eyebrow">Hola, soy</p>
            <h1 id="hero-title">Franco Crovetto</h1>
            <p className="hero__role">Full Stack Developer</p>
            <p className="hero__description">
              Desarrollo soluciones web pensadas para personas y negocios.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#proyectos">
                Ver proyectos
              </a>
              <a className="button button--secondary" href="#contacto">
                Contactarme
              </a>
            </div>
          </div>
          <div
            aria-label="Avatar tipográfico con las iniciales FC"
            className="hero__avatar"
            role="img"
          >
            FC
          </div>
        </section>
        <section
          aria-labelledby="about-title"
          className="about"
          id="sobre-mi"
        >
          <p className="section-eyebrow">Un poco sobre mí</p>
          <h2 id="about-title">Desarrollo con curiosidad y propósito.</h2>
          <p className="about__description">
            Estoy cursando cuarto año de Ingeniería en Sistemas y complemento
            mi formación con proyectos académicos y el desarrollo de un sitio
            web para una empresa. Me interesa el desarrollo full stack y tengo
            conocimientos en React, Tailwind CSS, bases de datos SQL y NoSQL,
            integración de APIs e inteligencia artificial. Busco una oportunidad
            para aportar en proyectos reales y seguir creciendo como
            desarrollador.
          </p>
        </section>
        <section
          aria-labelledby="projects-title"
          className="projects"
          id="proyectos"
        >
          <div className="projects__header">
            <p className="section-eyebrow">Selección de trabajos</p>
            <h2 id="projects-title">Proyectos</h2>
            <p className="projects__description">
              Proyectos académicos y soluciones web en las que participé.
            </p>
          </div>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
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
                <p className="project-card__description">
                  {project.description}
                </p>
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
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
