import "./TimelineItem.scss";

function TimelineItem({ item, index }) {
  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "timelineItem--left" : "timelineItem--right"
      }`}
    >
      <span className="timelineItem__dot"></span>

      <div className="timelineItem__card">
        <span className="timelineItem__year">
          {item.year}
        </span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;