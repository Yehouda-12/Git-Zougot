import { useContext, useMemo, useState, useEffect } from "react";
import BordGrid from "./BordGrid";
import CardContainer from "./CardContainer";
import GameSettingsContext from "../contexts/GameSettingsContext";
import { generateBombs } from "../utils/bombRandom";

function Game() {
 
  const { gridSize, bombCount, timeLeft, setTimeLeft } = useContext(GameSettingsContext);

  const totalCells = gridSize * gridSize;


  const bombs = useMemo(() => generateBombs(totalCells, bombCount), [totalCells, bombCount]);


  const [revealed, setRevealed] = useState(new Set());


  const revealCell = (index) => {
    setRevealed((prev) => new Set(prev).add(index));
  };


  const bombsRemaining =
    bombCount -
    Array.from(revealed).filter((i) => bombs.has(i)).length;


  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
 
      <CardContainer
        bombsRemaining={bombsRemaining}
        size={gridSize}
        timeLeft={timeLeft}
      />

      <BordGrid
        bombs={bombs}
        revealed={revealed}
        revealCell={revealCell}
      />
    </div>
  );
}

export default Game;