import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; 
import logoImg from '../assets/logo.png';
const Header = () => {
  return (
    <header className="perfil-header">
    <img src={logoImg} alt="logo" className="logo" />
    <ul className="perfil-lista">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Adopta">Adopta</Link></li>
        <li><Link to="/Foro">Foro</Link></li>
    </ul>
    <Link to="/perfil" className="Perfil-c">Perfil</Link>
    </header>
  );
}

export default Header;