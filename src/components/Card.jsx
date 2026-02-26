
import './Card.css'

function Card({headLine, context}) {
  return (
    <>
    <div className="card">
        <h2>{headLine}</h2>
        <p>{context}</p>
        </div>
    </>
  )
}

export default Card