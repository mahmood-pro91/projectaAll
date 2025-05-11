// src/App.js

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ClientList from './components/ClientList';
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import Navbar from './components/Navbar';
import { ClientProvider } from './context/ClientContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import "./index.css"
import './App.css'
// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App2() {
  return (
    <Router>
      <AuthProvider>
        <ClientProvider>
          <AppContent />
        </ClientProvider>
      </AuthProvider>
    </Router>
  );
}

function AppContent() {
  const { currentUser } = useAuth();

  return (
    <div className="app-container">
      {currentUser && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/clients" element={
            <ProtectedRoute>
              <ClientList />
            </ProtectedRoute>
          } />
          <Route path="/add-client" element={
            <ProtectedRoute>
              <AddClient />
            </ProtectedRoute>
          } />
          <Route path="/edit-client/:id" element={
            <ProtectedRoute>
              <EditClient />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App2;