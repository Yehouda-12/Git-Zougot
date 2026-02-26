import { createContext, useState, useMemo } from "react";
import { generateBombs } from "../utils/bombRandom";

const GameContext = createContext();

export function GameProvider({ children }) {
  const gridSize = 10;
  const bombCount = 15;
  const totalCells = gridSize * gridSize;

  const [resetKey, setResetKey] = useState(0);

  const bombs = useMemo(() => {
    return generateBombs(totalCells, bombCount);
  }, [resetKey]);

  function resetGame() {
    setResetKey(prev => prev + 1);
  }

  return (
    <GameContext.Provider
      value={{
        gridSize,
        bombCount,
        totalCells,
        bombs,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;