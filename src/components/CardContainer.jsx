import React from "react";
import Card from "./Card";
import Timer from "./Timer";


function CardContainer({setEndTime}) {
  return (
    <div className="card-container">
      <Card headLine={"Time Remaining"} context={<Timer setEndTime={setEndTime}/>} />
      <Card headLine={"Bombs Remaining"} context={5} />
      <Card headLine={"Board Size"} context={"10 * 8"} />
    </div>
  );
}

export default CardContainer;
