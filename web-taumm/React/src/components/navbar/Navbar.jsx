import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useState, useRef, useEffect } from 'react';

import './Navbar.css';
import Logo from '../../assets/logo-taumm-simple.png';
import Hamburger from '../../assets/hamburger.png';
import NavbarOptions from '../navbar-options/Navbar-options.jsx'
import '../navbar-options/Navbar-options.css'

// EL FUNCIONAMIENTO DEL BOTÓN HAMBURGUESA Y PANTALLA RESPONSIVA SERÁ LA ÚLTIMA PRIORIDAD

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isProductosOpen, setProductosOpen] = useState(false);
    const [isCatalogoOpen, setCatalogoOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };
        checkAuthStatus();

        window.addEventListener('storage', checkAuthStatus);

        return () => {
            window.removeEventListener('storage', checkAuthStatus)
        };
        
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        window.dispatchEvent(new Event('storage'));
        navigate('/')
    }


    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMenu() {
        setIsMenuOpen(false);
    };

    const listProductos = [
        {categoria: 'Todos', path: '/productos'},
        {categoria: 'Griferías', path: '/griferias'},
        {categoria: 'Cañerías', path: '/cañerias'},
        {categoria: 'Duchas', path: '/duchas'},
        {categoria: 'Fitting', path: '/fitting'},
        {categoria: 'Lavaplatos', path: '/lavaplatos'},
        {categoria: 'Accesorios', path: '/accesorios'}
    ];

    const listSignIn = [
        {categoria: 'Iniciar Sesión', path: '/signin'},
    ];

    const listSignedIn = [
        {categoria: 'Perfil', path: '/profile'},
        {categoria: 'Cerrar Sesión', path: '#'}
    ];

    return (
        <div style = {{position: 'fixed', top: 0, width: '100%', zIndex: 10000}}>
            <nav className='nav-container'>
                <Link to='/' className='nav-logo'>
                    <img
                        src={Logo}
                        alt='Logo'
                        className='nav-logo-image'
                    />
                </Link>

                <ul className={`nav-options ${isMenuOpen ? 'nav-options-active' : 'nav-options-inactive'}`}>

                    <li onMouseEnter = {() => setProductosOpen(true)}
                        onMouseLeave = {() => setProductosOpen(false)}>
                        <div className="nav-option-expanded">
                            <Link   to='/productos'
                                    className='nav-option'>Productos</Link>
                            {isProductosOpen && (
                                <NavbarOptions list = {listProductos} />
                            )} 
                        </div>
                    </li>
                    <li onMouseEnter = {() => setCatalogoOpen(true)}
                        onMouseLeave = {() => setCatalogoOpen(false)}>
                        <div className="nav-option-expanded">
                            <Link to='/catalogo' className='nav-option'>Catálogo</Link>
                            {isCatalogoOpen && (
                                <NavbarOptions list = {listProductos} />  
                            )} 
                        </div>
                    </li>
                    <li>
                        <div className = 'nav-option-expanded'>
                            <Link to='/contacto' className='nav-option'>Contacto</Link>
                        </div>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li onMouseEnter = {() => setProfileOpen(true)}
                                onMouseLeave = {() => setProfileOpen(false)}>
                                <div className = 'nav-option-expanded'>
                                    <Link to = '/profile' className = 'nav-option'> Perfil </Link>
                                    {isProfileOpen && (
                                        <ul className='nav-options-list'>
                                            {listSignedIn.map(item => (
                                                <li key = {item.categoria}>
                                                    {item.categoria === 'Cerrar Sesión' ? (
                                                        <a onClick = {handleLogout} style = {{ cursor: 'pointer' }}> Cerrar Sesión </a>
                                                    ) : (
                                                        <Link to = {item.path}>{item.categoria}</Link>
                                                    )}
                                                    
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                            </li>
                        </>
                    ) : (
                        <li onMouseEnter = {() => setLoginOpen(true)}
                            onMouseLeave = {() => setLoginOpen(false)}>
                            <div className="nav-option-expanded">
                                <Link to = '/signin' className = 'nav-option'>Login</Link>
                                {isLoginOpen && (
                                    <NavbarOptions list = {listSignIn} />  
                                )} 
                            </div>
                        </li>
                    )}

                    


                </ul>

                <button 
                    className={`hamburger ${isMenuOpen ? 'hamburger-active' : 'hamburger-inactive'}`}
                    onClick={toggleMenu}>
                        <img src={Hamburger} className='nav-hamburger-image'/>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;