type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? (
        <p className="section-header__description">{description}</p>
      ) : null}
    </div>
  );
}
