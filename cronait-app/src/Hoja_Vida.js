import React from "react";
import { Link } from "react-router-dom";
import "./Bienvenida.css"; // Mantiene los mismos estilos
import "./Style.css"; 
import Header from "./Header";
import Footer from "./Footer";

import logo from "./imagenes/logo.png"; // Importa el logo

const HojaVida = () => {
  return (
    <div>
          {/* Header */}
      <Header />
    <div className="container">
    

      {/* Contenido principal */}
      <main className="container">
      <div className="titulo Fuente1">HV</div>
        <section className="container">
          <h2>Información Personal</h2>
          <p><strong>Nombre:</strong> [Tu Nombre]</p>
          <p><strong>Email:</strong> [Tu Email]</p>
          <p><strong>Teléfono:</strong> [Tu Teléfono]</p>

          <h2>Experiencia Laboral</h2>
          <ul>
            <li><strong>Empresa 1:</strong> Cargo - Año</li>
            <li><strong>Empresa 2:</strong> Cargo - Año</li>
          </ul>

          <h2>Educación</h2>
          <ul>
            <li><strong>Universidad:</strong> Carrera - Año</li>
          </ul>

          <h2>Habilidades</h2>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      
    </div>
    <Footer />
    </div>
  );
};

export default HojaVida;
