import React, { useState, createContext, useContext, useEffect } from 'react';

import { jwtDecode} from 'jwt-decode';




const Context = createContext(null);


export const Share = ({children}) => {
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
        <Context.Share value = {{ user, login, logout }}>
            {children}
        </Context.Share>
    );
};

export const useAuthContext = () => {
    return useContext(Context);
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
