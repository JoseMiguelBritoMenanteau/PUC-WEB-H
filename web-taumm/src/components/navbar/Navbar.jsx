import React from 'react';
import { Link } from 'react-router';
import { useState, useRef, useEffect } from 'react';

import './Navbar.css';
import Logo from '../../assets/logo-taumm-simple.png';
import Hamburger from '../../assets/hamburger.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMenu() {
        setIsMenuOpen(false);
    };

    return (
        <nav className='nav-container'>
            <Link to='/' className='nav-logo'>
                <img
                    src={Logo}
                    alt='Logo'
                    className='nav-logo-image'
                />
            </Link>

            <ul className={`nav-options ${isMenuOpen ? 'nav-options-active' : 'nav-options-inactive'}`}>
                <li>
                    <Link to='/productos' className='nav-option'>Productos</Link>
                </li>
                <li>
                    <Link to='/catalogo' className='nav-option'>Catálogo</Link>
                </li>
                <li>
                    <Link to='/contacto' className='nav-option'>Contacto</Link>
                </li>
                <li>
                    <Link to='/login' className='nav-option'>Login</Link>
                </li>
            </ul>

            <button 
                className={`hamburger ${isMenuOpen ? 'hamburger-active' : 'hamburger-inactive'}`}
                onClick={toggleMenu}>
                    <img src={Hamburger} className='nav-hamburger-image'/>
            </button>
        </nav>
    )
}

export default Navbar;