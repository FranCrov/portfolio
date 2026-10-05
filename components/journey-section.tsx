import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section
      aria-labelledby="journey-title"
      className="section section--sunken"
      id="recorrido"
    >
      <div className="shell">
        <div className="section__head">
          <div>
            <span className="section__eyebrow">Formación y experiencia</span>
            <h2 id="journey-title">Recorrido</h2>
          </div>
          <p className="section__lede">
            Lo que vengo construyendo en la facultad y fuera de ella.
          </p>
        </div>
        <ol className="journey__list">
          {journey.map((entry, index) => (
            <li
              className="journey__entry"
              data-reveal=""
              key={entry.title}
              style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <p className="journey__period">{entry.period}</p>
              <div className="journey__body">
                <h3>{entry.title}</h3>
                <p className="journey__context">{entry.context}</p>
                <p className="journey__description">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}