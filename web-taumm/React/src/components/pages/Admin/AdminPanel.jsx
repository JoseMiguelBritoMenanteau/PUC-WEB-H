import React, { useState, useEffect, useRef} from 'react';
import './AdminPanel.css';


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
            console.error('Error Fetching Usuarios:', error)
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
