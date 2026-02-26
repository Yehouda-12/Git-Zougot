import "./App.css";



import { useState } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import BordGrid from "./components/BordGrid";

function App() {
  const [bombsRemaining, setBombsRemaining] = useState(15);
  const [gameStatus, setGameStatus] = useState(null); // null / "win" / "lose"

  return (
    <>
      <Navbar />
      <CardContainer bombsRemaining={bombsRemaining} />
      
      {gameStatus === "win" && <h2 style={{ color: "green" }}>🎉 YOU WIN! 🎉</h2>}
      {gameStatus === "lose" && <h2 style={{ color: "red" }}>⏰ TIME'S UP! YOU LOSE 💥</h2>}
      
      <BordGrid 
        setBombsRemaining={setBombsRemaining} 
        setGameStatus={setGameStatus} 
      />
      
    </>
  );
}

export default App;