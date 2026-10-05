import { Icon } from "@/components/icon";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <a className="brand" href="#inicio">
          {site.firstName}
          <span aria-hidden="true">.</span>
          <span className="sr-only">, volver al inicio</span>
        </a>
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <a className="site-footer__top" href="#inicio">
          Volver arriba
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  );
}