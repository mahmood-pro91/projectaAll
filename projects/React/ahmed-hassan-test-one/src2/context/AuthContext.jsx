// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    return new Promise((resolve, reject) => {
      // In a real app, you would make API calls
      // For this demo, we'll use localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === userData.email && u.password === userData.password);
      
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    });
  };

  const register = (userData) => {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.some(user => user.email === userData.email)) {
        reject(new Error('Email already in use'));
        return;
      }
      
      const newUser = {
        id: Date.now().toString(),
        ...userData
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      setCurrentUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      resolve(newUser);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};