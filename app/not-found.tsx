import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="shell notfound__inner">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Esta página no existe</h1>
        <p className="notfound__text">
          El enlace puede estar mal escrito o la página se movió. Todo el
          contenido del portfolio sigue en la página principal.
        </p>
        <Link className="button button--primary" href="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}