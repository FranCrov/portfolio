import { ThemeToggle } from "@/components/theme-toggle";

const navigationLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a aria-label="Ir al inicio" className="brand" href="#inicio">
            FC<span aria-hidden="true">.</span>
          </a>
          <nav aria-label="Navegación principal" className="site-nav">
            {navigationLinks.map(({ href, label }) => (
              <a
                aria-current={href === "#inicio" ? "page" : undefined}
                href={href}
                key={href}
              >
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
