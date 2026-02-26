function Card({ headLine, context }) {
  return (
    <div className="card">
      <h3 className="card-title">{headLine}</h3>
      <div className="card-value">{context}</div>
    </div>
  );
}

export default Card;