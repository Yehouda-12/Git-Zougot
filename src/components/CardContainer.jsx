import React, { useContext } from "react";
import Card from "./Card";
import Timer from "./Timer";
import GameSettingsContext from "../contexts/GameSettingsContext";

function CardContainer({ bombsRemaining }) {
  const { gridSize } = useContext(GameSettingsContext);

  return (
    <div className="card-container">
      <Card headLine="Time Remaining" context={<Timer />} />
      <Card headLine="Bombs Remaining" context={bombsRemaining} />
      <Card headLine="Board Size" context={`${gridSize} x ${gridSize}`} />
    </div>
  );
}

export default CardContainer;