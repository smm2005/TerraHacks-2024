import {useState} from "react";
import Home from "./components/Home";
import Prediction from "./components/Prediction";
import LineChart from "./components/MapChart";

function App() {
  return (
    <div >
      <Prediction />
      <LineChart />
    </div>
  );
}

export default App;
