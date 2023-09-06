import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import Number from "./components/Number";
import Colored from "./components/Colored";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:urlVar" element={<Number />} />
        <Route path="/:urlVar/:bgColor/:color" element={<Colored />} />
      </Routes>
    </div>
  );
}

export default App;
