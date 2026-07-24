import "./TechCard.scss";

function TechCard({ name, icon }) {
  return (
    <article className="techCard">

      <div className="techCard__icon">
        {icon}
      </div>

      <h3 className="techCard__name">
        {name}
      </h3>

    </article>
  );
}

export default TechCard;