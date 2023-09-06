import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import Colored from "./components/Colored";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
        <Route path="/word" element={<Word />} />
        <Route path="/colored" element={<Colored />} />
      </Routes>
    </div>
  );
}

export default App;
