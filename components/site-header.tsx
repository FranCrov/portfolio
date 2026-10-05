import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";

const navigationLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="shell site-header__inner">
          <a aria-label={`${site.name}, inicio`} className="brand" href="#inicio">
            {site.brandName}
            <span aria-hidden="true">.</span>
          </a>
          <nav aria-label="Navegación principal" className="site-nav">
            {navigationLinks.map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}