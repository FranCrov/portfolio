import { Icon } from "@/components/icon";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <a aria-label={`${site.name}, volver al inicio`} className="brand" href="#inicio">
          {site.firstName}
          <span aria-hidden="true">.</span>
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