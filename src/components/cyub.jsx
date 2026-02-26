

function Cyub({ isBomb }) {
  return (
    <div className="cell">
      {isBomb ? "💣" : ""}
    </div>
  );
}

export default Cyub;