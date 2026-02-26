import { createContext, useState } from "react";

const GameSettingsContext = createContext();

export function GameSettingsProvider({ children }) {

  const [gridSize, setGridSize] = useState(5);       
  const [bombCount, setBombCount] = useState(15);  
  const [timeLeft, setTimeLeft] = useState(60);       

  const value = {
    gridSize,
    setGridSize,
    bombCount,
    setBombCount,
    timeLeft,
    setTimeLeft,
  };

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  );
}

export default GameSettingsContext;