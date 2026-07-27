import {
  SiPython,
  SiFastapi,
  SiReact,
  SiJavascript,
  SiSqlalchemy,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";
import useScrollAnimation from "../hooks/useScrollAnimation";

const iconMap = {
  Python: SiPython,
  FastAPI: SiFastapi,
  React: SiReact,
  JavaScript: SiJavascript,
  SQLAlchemy: SiSqlalchemy,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  Linux: SiLinux,
};

export default function Skills({ config }) {
  const [ref, visible] = useScrollAnimation(0.05);

  return (
    <section ref={ref} className={`section ${visible ? "visible" : ""}`}>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {config.skills.map((skill) => {
          const Icon = iconMap[skill];
          return (
            <div key={skill} className="skill-card">
              {Icon && <Icon className="skill-card-icon" />}
              <span className="skill-card-name">{skill}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
