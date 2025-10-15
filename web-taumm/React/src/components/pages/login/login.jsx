import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './login.css'





const SignInBox = () => {

    return (
        <div className = 'sign-in-box-container'>
            <h2 className = 'sign-in-box-title'>Iniciar Sesión</h2>
            <form className="sign-in-form">
                <input type="text" id="username" name="username" required  placeholder = 'Nombre de Usuario'/>

                <input type="password" id="password" name="password" required placeholder = 'Contraseña' />

                <button type="submit">Entrar</button>
            </form>
            <div className = 'sign-in-box-footer'>

            </div>
        </div>
    )
};

export default SignInBox;