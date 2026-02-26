

function Card({headLine, context}) {
  return (
    <>
    <div className="card">
        <h2>{headLine}</h2>
      <div className="card-value">{context}</div>
        </div>
    </>
  )
}

export default Card