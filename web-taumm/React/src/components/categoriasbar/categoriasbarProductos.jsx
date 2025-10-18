import React from 'react';
import { Link } from 'react-router';
import './categoriasbar.css';

const categoriasProductos = [
  { nombre: 'Monomandos', path: '/productos/monomandos' },
  { nombre: 'Acc.Ducha', path: '/productos/accducha' },
  { nombre: 'Acc.De Baño', path: '/productos/accbano' },
  { nombre: 'Grifería Gral.', path: '/productos/griferia-general' },
  { nombre: 'Flexibles', path: '/productos/flexibles' },
  { nombre: 'Válvulas', path: '/productos/valvulas' },
  { nombre: 'Llaves', path: '/productos/llaves' },
  { nombre: 'Fiting Bonce', path: '/productos/fitingbonce' },
  { nombre: 'Temporizadas', path: '/productos/temporizadas' },
  { nombre: 'Fiting Latón', path: '/productos/fittinglaton' },
  { nombre: 'Sanitaria', path: '/productos/sanitarios' },
  { nombre: 'Repuestos', path: '/productos/repuestos' },
  { nombre: 'Shower Door', path: '/productos/showerdoor' },
  { nombre: 'Espejo Vanit.', path: '/productos/espejovanit' },
  
  { nombre: 'Grifería Electrónica', path: '/productos/griferiaelec' },
  { nombre: 'Tinas Acero', path: '/productos/tinasacero' },
  { nombre: 'Lavaplatos', path: '/productos/lavaplatos' },
  { nombre: 'Acc. WC', path: '/productos/accwc' },
  { nombre: 'Teflones', path: '/productos/teflones' },
];

const CategoriasBarProductos = () => (
  <nav className="categorias-bar">
    <Link to="/productos" className="categoria-link">
      Todos los productos
    </Link>
    {categoriasProductos.map(cat => (
      <Link key={cat.nombre} to={cat.path} className="categoria-link">
        {cat.nombre}
      </Link>
    ))}
  </nav>
);

export default CategoriasBarProductos;
