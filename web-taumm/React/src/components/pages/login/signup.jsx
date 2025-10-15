import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './signup.css'
import { Link } from 'react-router';





const SignUpBox = () => {

    return (
        <div className = 'sign-in-box-container'>
            <h2 className = 'sign-in-box-title'>Iniciar Sesión</h2>
            <form className="sign-in-form">
                <input className = 'sign-in-input' type="email" name="email" required  placeholder = 'Correo Electrínico'/>

                <input className = 'sign-in-input' type="text" name="username" required  placeholder = 'Nombre de Usuario'/>

                <input className = 'sign-in-input' type="password" name="password" required placeholder = 'Contraseña' />

                <input className = 'sign-in-input' type="tel" name="phone_number" required placeholder = 'Número de Teléfono' />

                <input className = 'sign-in-input' type="text" name="direction" required placeholder = 'Dirección' />

                <button type="submit" className = 'sign-in-button'>Entrar</button>
            </form>
            <div className = 'sign-in-box-footer'>
                <Link to = '/contacto' className = 'sign-in-box-register-link'> ¿Tienes problemas? Contáctate </Link>
            </div>
        </div>
    )
};

export default SignUpBox;