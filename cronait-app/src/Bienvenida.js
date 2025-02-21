import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "./Bienvenida.css";

import Header from "./Header";
import Footer from "./Footer";

import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/imagen2.jpg";
import imagen3 from "./imagenes/imagen3.jpg";
import imagen4 from "./imagenes/imagen4.jpg";

const Bienvenida = () => {
  const imagenes = [imagen1, imagen2, imagen3, imagen4];
  const [indice, setIndice] = useState(0);

  // Función para cambiar a la siguiente imagen
  const siguienteImagen = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  // Función para cambiar a la imagen anterior
  const anteriorImagen = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  // Efecto para cambiar automáticamente de imagen cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="main">
        {/* Carrusel de imágenes */}
        <div className="carousel">
          <button onClick={anteriorImagen} className="carousel-button left">
            ◀
          </button>
          <img src={imagenes[indice]} alt="Carrusel" className="carousel-image" />
          <button onClick={siguienteImagen} className="carousel-button right">
            ▶
          </button>
        </div>

        {/* Mensaje de bienvenida */}
        <h1 className="bienvenida">¡Bienvenido a nuestro portal web!</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bienvenida;
