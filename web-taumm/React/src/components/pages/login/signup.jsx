import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './signup.css'
import { Link, useNavigate } from 'react-router';





const SignUpBox = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [direction, setDirection] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:8000/auth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    phone_number: phoneNumber,
                    direction
                }),
            });

            if (response.ok) {
                setSuccess('Cuenta exitosamente creada. Redirigiendo para iniciar sesión...')
                setTimeout(() => {
                    navigate('/signin');
                }, 2000);
            } else {
                const errorDado = await response.json();
                setError(errorDado.detail || 'Error al crear la cuenta');
            }
        } catch (error) {
            setError('Error de programación / server')
        }
    }

    return (
        <div className = 'sign-in-box-container'>
            <h2 className = 'sign-in-box-title'>Crear Cuenta</h2>
            <form className="sign-in-form" onSubmit = {handleSubmit}>
                <input className = 'sign-in-input' type="email" name="email" required  placeholder = 'Correo Electrínico' onChange = {e => setEmail(e.target.value)} />

                <input className = 'sign-in-input' type="text" name="username" required  placeholder = 'Nombre de Usuario' onChange = {e => setUsername(e.target.value)} />

                <input className = 'sign-in-input' type="password" name="password" required placeholder = 'Contraseña' onChange = {e => setPassword(e.target.value)} />

                <input className = 'sign-in-input' type="tel" name="phone_number" required placeholder = 'Número de Teléfono' onChange = {e => setPhoneNumber(e.target.value)} />

                <input className = 'sign-in-input' type="text" name="direction" required placeholder = 'Dirección' onChange = {e => setDirection(e.target.value)} />

                {error && <p style={{ color: 'red', textAlign: 'center', fontSize: '0.9rem' } }> {error} </p>}
                {success && <p style={{ color: 'black', textAlign: 'center', fontSize: '0.9rem' } } > {success} </p>}

                <button type="submit" className = 'sign-in-button'>Entrar</button>
            </form>
            <div className = 'sign-in-box-footer'>
                <Link to = '/contacto' className = 'sign-in-box-register-link'> ¿Tienes problemas? Contáctate </Link>
            </div>
        </div>
    )
};

export default SignUpBox;