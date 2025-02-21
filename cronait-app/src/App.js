import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bienvenida from "./Bienvenida";
import HojaVida from "./Hoja_Vida"; 
import Apps from "./Target_Apps"; 
import Cursos from "./Cursos"; 

import Header from "./Header";
import Footer from "./Footer";
import "./Bienvenida.css"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/hoja-vida" element={<HojaVida />} />
          <Route path="/Target-Apps" element={<Apps />} />
          <Route path="/Cursos" element={<Cursos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
