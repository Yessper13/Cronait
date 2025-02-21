import React, { useState, useEffect } from "react";
import "./Cursos.css";
import Header from "./Header";
import Footer from "./Footer";

function Cursos() {
  const [certificadoSeleccionado, setCertificadoSeleccionado] = useState(null);
  const [certificados, setCertificados] = useState([]);

  // Cargar la lista de certificados
  useEffect(() => {
    const listaCertificados = [
      "certificado1.pdf",
      "certificado2.pdf",
      "certificado3.pdf",
    ];
    setCertificados(listaCertificados);
  }, []);

  return (
    <div className="cursos-page">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="cursos-container">
        <div className="cursos-titulo">Cursos</div>

        <div className="cursos-content">
          {/* Lista de cursos */}
          <div className="lista-cursos">
            <h3>Lista de certificados</h3>
            <ul>
              {certificados.map((cert, index) => (
                <li key={index} onClick={() => setCertificadoSeleccionado(cert)}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Vista previa de certificados */}
          <div className="vista-previa">
            <h3>Vista previa de certificados</h3>
            {certificadoSeleccionado ? (
              <iframe
                src={`/Certificados/${certificadoSeleccionado}`}
                className="certificado-frame"
                title="Vista previa del certificado"
              />
            ) : (
              <p>Selecciona un certificado para ver la vista previa.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Cursos;
