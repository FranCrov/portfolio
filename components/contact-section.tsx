import { ContactForm } from "@/components/contact-form";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Icon } from "@/components/icon";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact"
      id="contacto"
    >
      <div className="shell contact__inner">
        <div className="contact__heading" data-reveal="">
          <span className="section__eyebrow">Contacto</span>
          <h2 id="contact-title">Hablemos</h2>
          <p className="contact__lede">
            ¿Tenés un proyecto en mente, una propuesta o una duda? Contame y
            te respondo. También podés escribirme directo por GitHub o LinkedIn.
          </p>
        </div>

        <div className="contact__layout">
          <aside className="contact__aside">
            <div className="contact__block" data-reveal="">
              <h3>Email</h3>
              <div className="contact__email-row">
                <a className="contact__email" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <CopyEmailButton />
              </div>
            </div>

            <div className="contact__block" data-reveal="" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <h3>Redes</h3>
              <div className="contact__socials">
                <a href={site.github} rel="noopener noreferrer" target="_blank">
                  <Icon name="github" />
                  GitHub
                </a>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  <Icon name="linkedin" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact__block" data-reveal="" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <h3>Ubicación</h3>
              <p className="contact__email">
                <Icon name="mapPin" />
                {site.location}
              </p>
            </div>
          </aside>

          <div data-reveal="" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}