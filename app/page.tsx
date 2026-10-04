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
            Portfolio
          </a>
          <nav aria-label="Navegación principal" className="site-nav">
            <a aria-current="page" href="#inicio">
              Inicio
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="page-shell" id="contenido">
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <p className="hero__eyebrow">Portfolio personal</p>
          <h1 id="hero-title">Full Stack Developer</h1>
        </section>
      </main>
    </>
  );
}
