import "./App.css";
import Card from "./components/Card";
import Timer from "./components/Timer";

function App() {


  return ( 
  <>
  <Card headLine={"Time Remaining"} context={<Timer />}/>
  <Card headLine={"Bombs Remaining"} context={5}/>
  <Card headLine={"Board Size"} context={'10 * 8'}/>
  </>
  );
}

export default App;
