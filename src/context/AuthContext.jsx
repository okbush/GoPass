import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const logout = (navigate) => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    if (navigate) {
      navigate('/'); // Redirect to the Dashboard after logout
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};