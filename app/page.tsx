import { ThemeToggle } from "./theme-toggle";

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
      </main>
    </>
  );
}
