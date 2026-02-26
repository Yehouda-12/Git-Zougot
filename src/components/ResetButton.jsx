function ResetButton() {
  return (
    <>
    <button className='reset' onClick={() => window.location.reload()}>Restart Game</button>
    </>
  )
}

export default ResetButton