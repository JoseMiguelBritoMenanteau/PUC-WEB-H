import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './Profile.css'

import { useAuthContext } from '../../../context/Context.jsx';

const Profile = () => {

    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const [currentUserDetails, setCurrentUserDetails] = useState(null);

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem('token');
        if (window.confirm('¿Estás seguro que quieres eliminar para siempre tu cuenta?')) {
            try {
                const response = await fetch('http://localhost:8000/users/me', {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    localStorage.removeItem('token');
                    navigate('/');
                } else {
                    console.error('Error al eliminar la cuenta');
                }
            } catch (error) {
                console.error('ERROR: ', error);
            }
        }
    };

    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch ('http://localhost:8000/users/me', {
                    method: 'GET',
                    headers: {'Authorization': `bearer ${token}`}
                });
                if (response.ok) {
                    const data = await response.json();
                    setCurrentUserDetails(data)
                } else {
                    console.error('Error en GET datos User', response.status);
                    logout();
                    navigate('/signin');
                }
            } catch (errorr) {
                console.error('Error', errorr);
                alert('Error para cargar el perfil');
                logout();
                navigate('/signin');
            }
        };
        if(user) {
            fetchUserDetails();
        } else {
            navigate('/signin');
        }
    }, [user, navigate, logout])

    return (
        //<div className = 'container-profile'>
        //    <h2> Perfil de Usuario </h2>
        //    <button onClick = {handleDeleteAccount} className = 'delete-account-button'>
        //        Eliminar Cuenta
        //    </button>
        //</div>
        <div className='profile-page-container'>
            <div className='profile-header'>
                <h1>Mi Perfil</h1>
                <h2>Bienvenido de vuelta, {currentUserDetails.username}!</h2>
            </div>

            <div className='profile-content'>
                <div className='profile-section'>
                    <h3>Detalles de la Cuenta</h3>
                    <ul className="details-list">
                        <li><strong>Nombre de Usuario:</strong> {currentUserDetails.username}</li>
                        <li><strong>Email:</strong> {currentUserDetails.email}</li>
                        <li><strong>Teléfono:</strong> {currentUserDetails.phone_number}</li>
                        <li><strong>Dirección de Despacho:</strong> {currentUserDetails.direction}</li>
                    </ul>
                </div>

                <div className='profile-section'>
                    <h3>Mi Carrito</h3>
                    <p className="empty-cart-message">Tu carrito de compras está vacío.</p>
                </div>
            </div>

            <div className='profile-actions'>
                <button onClick={handleDeleteAccount} className='delete-account-button'>
                    Eliminar Cuenta
                </button>
            </div>
        </div>
    );
};


export default Profile;


