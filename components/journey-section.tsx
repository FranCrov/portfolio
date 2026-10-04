import { journey } from "@/data/journey";
import { SectionHeading } from "@/components/section-heading";

export function JourneySection() {
  return (
    <section
      aria-labelledby="journey-title"
      className="journey"
      id="recorrido"
    >
      <SectionHeading
        eyebrow="Formación y experiencia"
        id="journey-title"
        title="Recorrido"
      />
      <ol className="journey__timeline">
        {journey.map((entry) => (
          <li className="journey__entry" key={entry.title}>
            <p className="journey__period">{entry.period}</p>
            <div className="journey__content">
              <h3>{entry.title}</h3>
              <p className="journey__context">{entry.context}</p>
              <p className="journey__description">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
