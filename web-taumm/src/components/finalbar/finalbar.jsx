import React from 'react';
import "./finalbar.css";
import Logo from '../../assets/logo-taumm-simple.png';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import linkedinIcon from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';
import { Link } from 'react-router';

const FinalBar = () => {
  return (
    <footer className="finalbar-container">
      <div className="finalbar-main">
        <div className="finalbar-logo-col">
          <img src={Logo} alt="TAUMM" className="finalbar-logo" />
          <div className="finalbar-social">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>


          </div>
        </div>
        <div className="finalbar-cols">
          <div>
            <h4>Recursos</h4>
            <ul>
              <li><Link to="/faq">Preguntas frecuentes</Link></li>
              <li><a href="https://api.tusitio.cl" target="_blank" rel="noopener noreferrer">API</a></li>
              <li><Link to="/como-llegar">Cómo llegar</Link></li>
            </ul>
          </div>
          <div>
            <h4>Nosotros</h4>
            <ul>
              <li><Link to="/quienes-somos">Quiénes somos</Link></li>
              <li><Link to="/trabaja">Trabaja con nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terminos">Términos y condiciones</Link></li>
              <li><Link to="/privacidad">Política de privacidad</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="finalbar-bottom">
        <small>2025, TAUMM S.A. | Santiago, Chile</small>
        <p className="finalbar-legal">
          TAUMM es una empresa de ... no se que poner Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FinalBar;
