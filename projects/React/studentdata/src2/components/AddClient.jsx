// src/components/AddClient.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClients } from '../context/ClientContext';

function AddClient() {
  const { addClient } = useClients();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    socialNumber: '',
    dateOfBirth: '',
    dateOfSubscription: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      addClient(formData);
      navigate('/clients');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-client-container">
      <h2>Add New Client</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Social Number</label>
          <input
            type="text"
            name="socialNumber"
            value={formData.socialNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Subscription Date</label>
          <input
            type="date"
            name="dateOfSubscription"
            value={formData.dateOfSubscription}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate('/clients')}
            className="btn btn-secondary"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Adding...' : 'Add Client'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClient;
