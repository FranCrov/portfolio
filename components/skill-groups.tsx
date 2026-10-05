import { Icon } from "@/components/icon";
import { skillGroups } from "@/data/skills";

export function SkillGroups() {
  return (
    <div className="skills">
      <div className="skills__head">
        <h3>Tecnologías y herramientas</h3>
        <Icon name="sparkles" />
      </div>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <section
            aria-labelledby={`skills-${group.name}`}
            className="skill-group"
            data-reveal=""
            key={group.name}
          >
            <h4 id={`skills-${group.name}`}>
              <Icon name={group.icon} />
              {group.name}
            </h4>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}