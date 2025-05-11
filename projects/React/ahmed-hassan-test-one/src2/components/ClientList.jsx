// src/components/ClientList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useClients } from '../context/ClientContext';

function ClientList() {
  const { clients, deleteClient, importFromExcel } = useClients();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle Excel import
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      setError('');
      const newClients = await importFromExcel(file);
      setSuccess(`Successfully imported ${newClients.length} clients!`);
      // Reset file input
      e.target.value = null;
    } catch (err) {
      setError(`Failed to import file: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm) ||
    client.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.socialNumber.includes(searchTerm)
  );

  return (
    <div className="client-list-container">
      <h2>Client List</h2>

      <div className="actions-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="action-buttons">
          <Link to="/add-client" className="btn btn-primary">Add New Client</Link>
          
          <div className="excel-import">
            <label className="btn btn-secondary">
              Import Excel
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                disabled={loading}
              />
            </label>
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {loading && <div className="loading">Loading...</div>}

      {filteredClients.length === 0 ? (
        <div className="no-clients">No clients found</div>
      ) : (
        <div className="client-table-container">
          <table className="client-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Social Number</th>
                <th>Date of Birth</th>
                <th>Subscription Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>{client.socialNumber}</td>
                  <td>{client.dateOfBirth}</td>
                  <td>{client.dateOfSubscription}</td>
                  <td className="actions">
                    <Link to={`/edit-client/${client.id}`} className="btn btn-sm btn-edit">Edit</Link>
                    <button 
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this client?')) {
                          deleteClient(client.id);
                        }
                      }}
                      className="btn btn-sm btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ClientList;