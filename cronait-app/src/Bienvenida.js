import React, { useState, useEffect } from "react";
import "./Bienvenida.css";

// Importar imágenes
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/imagen2.jpg";
import imagen3 from "./imagenes/imagen3.jpg";
import imagen4 from "./imagenes/imagen4.jpg";
import logo from "./imagenes/logo.png";

const Bienvenida = () => {
  const imagenes = [imagen1, imagen2, imagen3, imagen4]; // Lista de imágenes
  const [indice, setIndice] = useState(0);

  // Cambiar a la siguiente imagen
  const siguienteImagen = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  // Cambiar a la imagen anterior
  const anteriorImagen = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  // Efecto para pasar imágenes automáticamente cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="perfil">Perfil</div>
        <nav className="nav">
          <a href="#">App's</a>
          <a href="#">HV</a>
          <a href="#">Cursos</a>
          <a href="#">Social</a>
        </nav>
        <button className="menu">☰</button>
      </header>

      {/* Carrusel */}
      <main className="main">
        <div className="carousel">
          <button onClick={anteriorImagen} className="carousel-button left">◀</button>
          <img src={imagenes[indice]} alt="Carrusel" className="carousel-image" />
          <button onClick={siguienteImagen} className="carousel-button right">▶</button>
        </div>

        <div>
            <h1 className="bienvenida">¡Bienvenido a nuestro portal web!</h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
      <img src={logo} alt="Logo Cronait" className="logo-footer" />
      </footer>
    </div>
  );
};

export default Bienvenida;
