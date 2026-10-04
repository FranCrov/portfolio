import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact"
      id="contacto"
    >
      <SectionHeading
        description="Estoy abierto a conversar sobre oportunidades y proyectos de desarrollo."
        eyebrow="Contacto"
        id="contact-title"
        title="¿Hablamos?"
      />
      <div className="contact__links">
        <a
          className="button button--primary"
          href="mailto:francoignacio.crovetto@gmail.com"
        >
          Escribime por email
        </a>
        <a
          className="button button--secondary"
          href="https://github.com/FranCrov"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
