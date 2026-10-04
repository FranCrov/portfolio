export function HeroSection() {
  return (
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
  );
}
