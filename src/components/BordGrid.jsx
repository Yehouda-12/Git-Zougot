import Cyub from "./cyub";
import "./BordGrid.css";
import { generateBombs } from "../utils/bombRandom";
import { useMemo } from "react";

function BordGrid() {
  const totalCells = 100;
  const bombCount = 15;

  const bombs = useMemo(() => generateBombs(totalCells, bombCount), []);

  const arr = new Array(totalCells).fill(null);

  return (
    <div className="grid-container">
      {arr.map((_, index) => (
        <Cyub
          key={index}
          id={index}
          isBomb={bombs.has(index)}
        />
      ))}
    </div>
  );
}

export default BordGrid;