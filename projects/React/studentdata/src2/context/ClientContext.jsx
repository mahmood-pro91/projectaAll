// src/context/ClientContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ClientContext = createContext();

export const useClients = () => {
  return useContext(ClientContext);
};

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load clients from localStorage on initial load
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }
    setLoading(false);
  }, []);

  // Save clients to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('clients', JSON.stringify(clients));
    }
  }, [clients, loading]);

  const addClient = (client) => {
    const newClient = {
      id: Date.now().toString(),
      ...client,
      dateOfSubscription: client.dateOfSubscription || new Date().toISOString().split('T')[0]
    };
    setClients(prevClients => [...prevClients, newClient]);
    return newClient;
  };

  const updateClient = (id, updatedClient) => {
    setClients(prevClients => 
      prevClients.map(client => 
        client.id === id ? { ...client, ...updatedClient } : client
      )
    );
  };

  const deleteClient = (id) => {
    setClients(prevClients => prevClients.filter(client => client.id !== id));
  };

  const getClient = (id) => {
    return clients.find(client => client.id === id);
  };

  const importFromExcel = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          
          const newClients = jsonData.map(row => ({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            name: row.name || '',
            phone: row.phone || '',
            address: row.address || '',
            socialNumber: row.socialNumber || '',
            dateOfBirth: row.dateOfBirth || '',
            dateOfSubscription: row.dateOfSubscription || new Date().toISOString().split('T')[0]
          }));
          
          setClients(prevClients => [...prevClients, ...newClients]);
          resolve(newClients);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const value = {
    clients,
    loading,
    addClient,
    updateClient,
    deleteClient,
    getClient,
    importFromExcel
  };

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
};