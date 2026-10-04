import { SkillGroups } from "@/components/skill-groups";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="about" id="sobre-mi">
      <p className="section-eyebrow">Un poco sobre mí</p>
      <h2 id="about-title">Desarrollo con curiosidad y propósito.</h2>
      <p className="about__description">
        Estoy cursando cuarto año de Ingeniería en Sistemas y complemento mi
        formación con proyectos académicos y el desarrollo de un sitio web para
        una empresa. Me interesa el desarrollo full stack y tengo conocimientos
        en React, Tailwind CSS, bases de datos SQL y NoSQL, integración de APIs e
        inteligencia artificial. Busco una oportunidad para aportar en
        proyectos reales y seguir creciendo como desarrollador.
      </p>
      <SkillGroups />
    </section>
  );
}
