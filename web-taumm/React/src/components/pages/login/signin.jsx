import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './signin.css'
import { Link, useNavigate } from 'react-router';





const SignInBox = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')

        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password)
        try {
            const response = await fetch('http://localhost:8000/auth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                window.dispatchEvent(new Event('storage'));
                navigate('/profile');
            } else {
                const errorDado = await response.json();
                setError(errorDado.detail || 'Error al Iniciar Sesión');
            }
        } catch (error) {
            setError('Error de programación / server')
        }
    };

    return (
        <div className = 'sign-in-box-container'>
            <h2 className = 'sign-in-box-title'>Iniciar Sesión</h2>
            <form className="sign-in-form" onSubmit = {handleSubmit}>
                <input className = 'sign-in-input' type="text" name="username" required  placeholder = 'Nombre de Usuario' onChange = {(e) => setUsername(e.target.value)} />

                <input className = 'sign-in-input' type="password" name="password" required placeholder = 'Contraseña' onChange = {(e) => setPassword(e.target.value)} />

                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                <button type="submit" className = 'sign-in-button'>Entrar</button>
            </form>
            <div className = 'sign-in-box-footer'>
                <Link to = '/signup' className = 'sign-in-box-register-link'> ¿No tienes una cuenta? Regístrate </Link>
            </div>
        </div>
    )
};

export default SignInBox;

