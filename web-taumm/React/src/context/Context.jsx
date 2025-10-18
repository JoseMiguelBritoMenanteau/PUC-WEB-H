import React, { useState, createContext, useContext, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';




const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setUser({ username: decodedUser.sub, id: decodedUser.id });

            } catch (error) {
                console.error('Token inválido, será eliminado', error);
                localStorage.removeItem('token');
            }
        }
    }, []);
    const login = (token) => {
        localStorage.setItem('token', token);
        const decodedUser = jwtDecode(token);
        setUser( { username: decodedUser.sub, id: decodedUser.id } );
    };
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    return (
        <AuthContext.Provider value = {{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};















const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
