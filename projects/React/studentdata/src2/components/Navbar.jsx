
// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Client Manager</Link>
      </div>
      
      <div className="navbar-menu">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/clients" className="nav-link">Clients</Link>
        <Link to="/add-client" className="nav-link">Add Client</Link>
      </div>
      
      <div className="navbar-user">
        {currentUser && (
          <>
            <span className="user-email">{currentUser.email}</span>
            <button onClick={handleLogout} className="btn btn-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
