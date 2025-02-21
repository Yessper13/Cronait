import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Target_Apps.css";
import "./Style.css";
import logo from "./imagenes/logo.png"; // Verifica la ruta

const apps = [  
  "App 1", "App 2", "App 3",
  "App 4", "App 5", "App 6",
  "App 7", "App 8", "App 9"
];

const Target_Apps = () => {
  return (
    <div>
      <Header />
    
    <div className="container">
      
      
      <div className="titulo Fuente1">App's</div>
      
      <main className="apps-grid">
        {apps.map((app, index) => (
          <div key={index} className="card">
            <img src={logo} alt={app} className="app-logo" />
            <h3>{app}</h3>
          </div>
        ))}
      </main>
      
      
    </div>
    <Footer />
    </div>
  );
};

export default Target_Apps;
