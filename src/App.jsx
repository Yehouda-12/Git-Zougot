import "./App.css";

import CardContainer from "./components/CardContainer";

import Navbar from "./components/Navbar.jsx";
import BordGrid from "./components/BordGrid";
import ResetButton from "./components/ResetButton.jsx";
import { useEffect, useState } from "react";
import End from "./components/end.jsx";

function App() {
  const [endTime,setEndTime] = useState(false)


 


  return (
  <>
  <Navbar />
 <CardContainer setEndTime={setEndTime}/>
  {!endTime ? <BordGrid/> : <End/>}
  <ResetButton />
    </>
  )

}

export default App;
