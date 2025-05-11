// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useClients } from '../context/ClientContext';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { clients } = useClients();
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="welcome-section">
        <h3>Welcome, {currentUser?.email || 'User'}</h3>
        <p>This is your client management dashboard.</p>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <h4>Total Clients</h4>
          <div className="stat-number">{clients.length}</div>
          <Link to="/clients" className="btn btn-primary">View All Clients</Link>
        </div>

        <div className="stat-card">
          <h4>Quick Actions</h4>
          <div className="dashboard-actions">
            <Link to="/add-client" className="btn btn-secondary">Add New Client</Link>
            <Link to="/clients" className="btn btn-secondary">Manage Clients</Link>
          </div>
        </div>
      </div>

      {clients.length > 0 && (
        <div className="recent-clients">
          <h3>Recent Clients</h3>
          <div className="client-table-container">
            <table className="client-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Subscription Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.slice(-5).reverse().map(client => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.phone}</td>
                    <td>{client.dateOfSubscription}</td>
                    <td className="actions">
                      <Link to={`/edit-client/${client.id}`} className="btn btn-sm btn-edit">Edit</Link>
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
}

export default Dashboard;
