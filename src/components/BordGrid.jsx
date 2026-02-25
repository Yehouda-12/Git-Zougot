
import Cyub from './cyub'
import './BordGrid.css'

function BordGrid() {
    const arr = new Array(100).fill(null);
    arr.fill
  return (
    <div className='grid-container'>
         {arr.map((_m,index)=>(
            <Cyub
            key={index}
            id={index}
            />
            ))}
      </div>
  )
}

export default BordGrid


