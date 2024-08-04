import {useState} from "react";
import Prediction from "./components/Prediction";
import MapChart from "./components/MapChart";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Classcomp from './components/Classcomp';
import Functionalcomp from './components/Functionalcomp';
import Home from './components/pages/Home';
import Model from './components/pages/Model';
import Solution from './components/pages/Solution';


function App() {
  const [chosenCountry, setChosenCountry] = useState(null);
  const [soil, setSoil] = useState([])
  const [rainfall, setRainfall] = useState([]);
  const [temperature, setTemperature] = useState([]);
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/model" element={<Model rainfall={rainfall} setRainfall={setRainfall} temperature={temperature} setTemperature={setTemperature} chosenCountry={chosenCountry} setChosenCountry={setChosenCountry} soil={soil} setSoil={setSoil}/>} />
            <Route path="/solution" element={<Solution chosenCountry={chosenCountry} soil={soil}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
