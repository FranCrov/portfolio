import { skillGroups } from "@/data/skills";

export function SkillGroups() {
  return (
    <div className="skills">
      <h3 className="skills__title">Habilidades</h3>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <section
            aria-labelledby={`skills-${group.name}`}
            className="skill-group"
            key={group.name}
          >
            <h4 id={`skills-${group.name}`}>{group.name}</h4>
            <ul>
              {group.skills.map((skill) => (
                <li key={`${group.name}-${skill}`}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
