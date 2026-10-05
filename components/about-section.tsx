import { Icon } from "@/components/icon";
import { SkillGroups } from "@/components/skill-groups";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="section"
      id="sobre-mi"
    >
      <div className="shell">
        <div className="about__grid">
          <div data-reveal="">
            <span className="section__eyebrow">Sobre mí</span>
            <h2 className="about__title" id="about-title">
              Curiosidad por
              <br />
              cómo funcionan las cosas.
            </h2>
          </div>
          <div className="about__bio" data-reveal="" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            <p>
              Soy {site.firstName} {site.lastName}, estudiante de cuarto año de
              Ingeniería en Sistemas en la UAI de Rosario. Me interesa trabajar
              tanto en la interfaz de una aplicación como en la lógica que la
              hace funcionar.
            </p>
            <p>
              Elijo proyectos donde tenga que aprender algo nuevo: un panel de
              reportes, un catálogo que carga datos de una API, un sistema de
              ventas con pagos e inventario. Me siento cómodo tanto en el
              frontend como en el backend, y me importa que el código que
              escribo se pueda mantener.
            </p>
            <a
              className="about__link"
              href={site.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Conocé mi perfil en LinkedIn
              <Icon name="arrowUpRight" />
            </a>
          </div>
        </div>
        <SkillGroups />
      </div>
    </section>
  );
}