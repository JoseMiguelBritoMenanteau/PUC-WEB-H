import React from 'react'
import { useNavigate } from 'react-router'
import './Profile.css'

const Profile = () => {

    const navigate = useNavigate();

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

    return (
        <div className = 'container-profile'>
            <h2> Perfil de Usuario </h2>
            <button onClick = {handleDeleteAccount} className = 'delete-account-button'>
                Eliminar Cuenta
            </button>
        </div>
    );
};


export default Profile;


