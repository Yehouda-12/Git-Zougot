import React from "react";
import Card from "./Card";
import Timer from "./Timer";
import './CardContainer.css'

function CardContainer() {
  return (
    <div className="card-container">
      <Card headLine={"Time Remaining"} context={<Timer />} />
      <Card headLine={"Bombs Remaining"} context={5} />
      <Card headLine={"Board Size"} context={"10 * 8"} />
    </div>
  );
}

export default CardContainer;
