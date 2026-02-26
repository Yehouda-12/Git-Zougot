function Cyub({ isBomb, isRevealed, onClick }) {
  return (
    <div
      className={`cell ${isRevealed ? "revealed" : ""}`}
      onClick={onClick}
    >
      {isRevealed && isBomb && "💣"}
    </div>
  );
}

export default Cyub;