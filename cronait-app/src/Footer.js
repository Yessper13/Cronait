import React from "react";
import "./Footer.css"; 
import logo from "./imagenes/logo.png"; // Importa el logo

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Cronait" className="logo-footer" />
    </footer>
  );
};

export default Footer;
