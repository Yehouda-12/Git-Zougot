import { useContext, useEffect } from "react";
import GameSettingsContext from "../contexts/GameSettingsContext";

function Timer() {
  const { timeLeft, setTimeLeft } = useContext(GameSettingsContext);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return <span>{timeLeft}s</span>;
}

export default Timer;