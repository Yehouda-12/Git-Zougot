import Cyub from "./cyub";
import { useContext, useMemo, useState, useEffect } from "react";
import GameSettingsContext from "../contexts/GameSettingsContext";
import { generateBombs } from "../utils/bombRandom";

function BordGrid({ setBombsRemaining, setGameStatus }) {
  const { gridSize, bombCount, timeLeft, setTimeLeft } = useContext(GameSettingsContext);
  const totalCells = gridSize * gridSize;

  const bombs = useMemo(() => generateBombs(totalCells, bombCount), [totalCells, bombCount]);

  const [revealedArr, setRevealedArr] = useState(Array(totalCells).fill(false));

  const handleClick = (index) => {
    if (revealedArr[index]) return; 
    const newRevealed = [...revealedArr];
    newRevealed[index] = true;
    setRevealedArr(newRevealed);
  };


  useEffect(() => {
    const bombsRevealed = revealedArr.reduce(
      (acc, revealed, i) => (revealed && bombs.has(i) ? acc + 1 : acc),
      0
    );

    setBombsRemaining && setBombsRemaining(bombCount - bombsRevealed);

    if (bombsRevealed === bombCount) {
      setGameStatus && setGameStatus("win");
    }
  }, [revealedArr, bombs, bombCount, setBombsRemaining, setGameStatus]);


  useEffect(() => {
    if (timeLeft <= 0) {
      setGameStatus && setGameStatus("lose");
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, setGameStatus]);

  const arr = new Array(totalCells).fill(null);

  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {arr.map((_, index) => (
        <Cyub
          key={index}
          isBomb={bombs.has(index)}
          isRevealed={revealedArr[index]}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default BordGrid;