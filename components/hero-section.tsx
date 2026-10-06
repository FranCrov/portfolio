import Image from "next/image";
import { Icon } from "@/components/icon";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="inicio">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{site.analystTitle}</p>
          <h1 id="hero-title">
            <span>{site.firstName}</span>
            <span className="hero__surname">
              <em>{site.lastName}</em>
            </span>
          </h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__description">
            Soy {site.firstName} {site.lastName}, estudiante de Ingeniería en
            Sistemas. Construyo aplicaciones web de punta a punta: interfaz,
            lógica, datos e integraciones.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              Explorá mis proyectos
              <Icon name="arrowUpRight" />
            </a>
            <a className="button button--ghost" href="#contacto">
              Contactarme
              <Icon name="arrowDown" />
            </a>
          </div>
        </div>
        <figure className="hero__portrait">
          <Image
            alt={`Retrato de ${site.name}`}
            blurDataURL={site.portraitBlur}
            className="hero__portrait-image"
            fill
            placeholder="blur"
            priority
            sizes="(max-width: 768px) clamp(8rem, 26vw, 11rem), 19rem"
            src={site.portrait}
          />
          <span aria-hidden="true" className="hero__portrait-ring" />
        </figure>
      </div>
      <div className="shell hero__bar">
        <div className="hero__bar-links">
          <a href={site.github} rel="noopener noreferrer" target="_blank">
            GitHub
            <Icon name="arrowUpRight" />
          </a>
          <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
            <Icon name="arrowUpRight" />
          </a>
          <a href={`mailto:${site.email}`}>
            {site.email}
            <Icon name="arrowUpRight" />
          </a>
          <a download href={site.cv}>
            Descargar CV
            <Icon name="download" />
          </a>
        </div>
        <p className="hero__bar-meta">Disponible para proyectos y oportunidades</p>
      </div>
    </section>
  );
}