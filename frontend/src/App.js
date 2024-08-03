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
  return (

    <div className="App">
      <div className="Header">
      </div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/model" element={<Model />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
