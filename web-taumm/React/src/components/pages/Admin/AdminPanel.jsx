import React, { useState, useEffect, useRef} from 'react';
import './AdminPanel.css';

/*
const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [pendingUsers, setPendindUsers] = setState([]);
    const [activeTab, setActiveTab] = useState('pending');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:8000/admin/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
                setPendinUsers(data.filter(user => !user.is_approved));
            }
        } catch (error) {
            console.error('Error fetching users:', error)
        } finally {
            setLoading(false);
        }
    };
    const approveUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/admin/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ is_approved: true, account_type: 'A' })
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error approving user:', error)
        }
    };

    return (

    )
};


export default AdminPanel;
*/
/*
    const approveUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/admin/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ is_approved: true, account_type: 'A' }) // Tipo A por defecto
            });
            if (response.ok) {
                fetchUsers(); // Recargar la lista
            }
        } catch (error) {
            console.error('Error approving user:', error);
        }
    };

    const updateAccountType = async (userId, accountType) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/admin/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ account_type: accountType })
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error updating account type:', error);
        }
    };

    const deleteUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/admin/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (loading) {
        return <div className="admin-loading">Cargando...</div>;
    }

    return (
        <div className="admin-panel">
            <h2>Panel de Administración</h2>
            
            <div className="admin-tabs">
                <button 
                    className={activeTab === 'pending' ? 'active' : ''}
                    onClick={() => setActiveTab('pending')}
                >
                    Solicitudes Pendientes ({pendingUsers.length})
                </button>
                <button 
                    className={activeTab === 'all' ? 'active' : ''}
                    onClick={() => setActiveTab('all')}
                >
                    Todas las Cuentas ({users.length})
                </button>
            </div>

            {activeTab === 'pending' && (
                <div className="users-section">
                    <h3>Solicitudes Pendientes de Aprobación</h3>
                    {pendingUsers.length === 0 ? (
                        <p>No hay solicitudes pendientes</p>
                    ) : (
                        <div className="users-grid">
                            {pendingUsers.map(user => (
                                <div key={user.id} className="user-card pending">
                                    <h4>{user.username}</h4>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Teléfono:</strong> {user.phone_number}</p>
                                    <p><strong>Dirección:</strong> {user.direction}</p>
                                    <p><strong>Registrado:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                                    <div className="user-actions">
                                        <button 
                                            className="approve-btn"
                                            onClick={() => approveUser(user.id)}
                                        >
                                            Aprobar
                                        </button>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Rechazar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'all' && (
                <div className="users-section">
                    <h3>Todas las Cuentas</h3>
                    <div className="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Email</th>
                                    <th>Estado</th>
                                    <th>Tipo de Cuenta</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`status ${user.is_approved ? 'approved' : 'pending'}`}>
                                                {user.is_approved ? 'Aprobado' : 'Pendiente'}
                                            </span>
                                        </td>
                                        <td>
                                            <select 
                                                value={user.account_type}
                                                onChange={(e) => updateAccountType(user.id, e.target.value)}
                                                disabled={!user.is_approved}
                                            >
                                                <option value="A">Tipo A</option>
                                                <option value="B">Tipo B</option>
                                                <option value="C">Tipo C</option>
                                                <option value="master">Master</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button 
                                                className="delete-btn"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
*/