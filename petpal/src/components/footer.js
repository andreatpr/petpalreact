import React from 'react';
import '../styles/footer.css'; 
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="prim-mitad">
          <img src={logoImg} alt="logo" className="logo" />
          <Link to="/anunciate">
            <button>Anunciate con Nosotros</button>
          </Link>
        </div>
        <div className="segun-mitad">
          Todos los derechos reservados 2023, www.petpalcommunity.com
        </div>
      </footer>
  );
}

export default Footer;
