import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Classcomp from './components/Classcomp';
import Functionalcomp from './components/Functionalcomp';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
