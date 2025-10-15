import React from 'react';
import { Link } from 'react-router';
import './finalbar.css';
import Logo from '../../assets/logo-taumm-simple.png';

const FinalBar = () => (
	<footer className="finalbar-container">
		<div className="finalbar-main">
			<div className="finalbar-logo-col">
				<img src={Logo} alt="TAUMM" className="finalbar-logo" />
				<div className="finalbar-social">
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    	<i className="fa-brands fa-linkedin"></i></a>

					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-x-twitter"></i></a>

					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i></a>

					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i></a>

					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i></a>
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
				TAUMM es una empresa ficticia para fines académicos. Todos los derechos reservados.
			</p>
		</div>
	</footer>
);

export default FinalBar;
