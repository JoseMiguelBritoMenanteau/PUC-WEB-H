import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './signin.css'
import { Link } from 'react-router';





const SignInBox = () => {

    return (
        <div className = 'sign-in-box-container'>
            <h2 className = 'sign-in-box-title'>Iniciar Sesión</h2>
            <form className="sign-in-form">
                <input className = 'sign-in-input' type="text" name="username" required  placeholder = 'Nombre de Usuario'/>

                <input className = 'sign-in-input' type="password" name="password" required placeholder = 'Contraseña' />

                <button type="submit" className = 'sign-in-button'>Entrar</button>
            </form>
            <div className = 'sign-in-box-footer'>
                <Link to = '/signup' className = 'sign-in-box-register-link'> ¿No tienes una cuenta? Regístrate </Link>
            </div>
        </div>
    )
};

export default SignInBox;

