"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section notfound">
      <div className="shell notfound__inner">
        <p className="notfound__code">Error</p>
        <h1 className="notfound__title">Algo falló al cargar</h1>
        <p className="notfound__text">
          Se produjo un error inesperado. Podés reintentar la carga; si el
          problema sigue, escribime y lo reviso.
        </p>
        <button className="button button--primary" onClick={reset} type="button">
          Reintentar
        </button>
      </div>
    </section>
  );
}