
import React from 'react';
import { Link } from 'react-router';
import './categoriasbar.css';

const categorias = [
  { nombre: 'Monomandos', path: '/catalogo/monomandos' },
  { nombre: 'Acc.Ducha', path: '/catalogo/accducha' },
  { nombre: 'Acc.De Baño', path: '/catalogo/accbaño' },
  { nombre: 'Grifería Gral.', path: '/catalogo/griferia-general' },
  { nombre: 'Flexibles', path: '/catalogo/flexibles' },
  { nombre: 'Válvulas', path: '/catalogo/valvulas' },
  { nombre: 'Llaves', path: '/catalogo/llaves' },
  { nombre: 'Fiting Bonce', path: '/catalogo/fitingbonce' },
  { nombre: 'Temporizadas', path: '/catalogo/temporizadas' },
  { nombre: 'Fiting Latón', path: '/catalogo/fittinglaton' },
  { nombre: 'Sanitaria', path: '/catalogo/sanitaria' },
  { nombre: 'Repuestos', path: '/catalogo/repuestos' },
  { nombre: 'Shower Door', path: '/catalogo/showerdoor' },
  { nombre: 'Espejo Vanit.', path: '/catalogo/espejovanit' },
  
  { nombre: 'Grifería Electrónica', path: '/catalogo/griferiaelec' },
  { nombre: 'Tinas Acero', path: '/catalogo/tinasacero' },
  { nombre: 'Lavaplatos', path: '/catalogo/lavaplatos' },
  { nombre: 'Acc. WC', path: '/catalogo/accwc' },
  { nombre: 'Teflones', path: '/catalogo/teflones' },
];


const CategoriasBar = () => (
  <nav className="categorias-bar">
    <Link to="/catalogo" className="categoria-link">
      Catálogo Completo
    </Link>
    {categorias.map(cat => (
      <Link key={cat.nombre} to={cat.path} className="categoria-link">
        {cat.nombre}
      </Link>
    ))}
  </nav>
);

export default CategoriasBar;