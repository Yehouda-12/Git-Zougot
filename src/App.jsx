import "./App.css";

import CardContainer from "./components/CardContainer";

import Navbar from "./components/Navbar.jsx";
import BordGrid from "./components/BordGrid";
import ResetButton from "./components/ResetButton.jsx";

function App() {


  return (
  <>
  <Navbar />
 <CardContainer/>
  <BordGrid/>
  <ResetButton />
    </>
  )

}

export default App;
