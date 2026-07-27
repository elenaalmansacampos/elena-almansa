import "./Experience.scss";
import TimelineItem from "./TimelineItem";

const experience = [
  {
    year: "2005 - 2025",
    title: "Webmaster | Desarrollo y gestión web",
    description:
      "Desarrollo y mantenimiento de sitios web corporativos, optimizando su rendimiento, usabilidad y experiencia de usuario, en coordinación con equipos multidisciplinares."
  },
  {
    year: "2002 - 2003",
    title: "Webmaster junior | Desarrollo web",
    description:
      "Diseño, desarrollo y mantenimiento de sitios web corporativos."
  }
  
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience__container">

        <h2>Trayectoria Profesional</h2>

        <p className="experience__subtitle">
          Dos décadas de evolución constante en el sector tecnológico.
        </p>

        <div className="experience__timeline">

          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;