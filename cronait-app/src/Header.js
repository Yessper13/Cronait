import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="perfil">Perfil</div>
      <nav className="nav">
        <Link to="/bienvenida">Inicio</Link>
        <Link to="/target-Apps">App's</Link>
        <Link to="/hoja-vida">HV</Link>
        <Link to="/Cursos">Cursos</Link>
        <Link to="#">Social</Link>
      </nav>
      <button className="menu">☰</button>
    </header>
  );
};

export default Header;
