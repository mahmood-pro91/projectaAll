import React, { useState } from 'react';
import axios from 'axios';

const AddCowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    typeOfCow: '',
    dateOfConception: '',
    typeOfConception: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cows', formData);
      alert('Cow added successfully!');
      setFormData({
        name: '',
        age: '',
        typeOfCow: '',
        dateOfConception: '',
        typeOfConception: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <input type="text" name="typeOfCow" placeholder="Type of Cow" value={formData.typeOfCow} onChange={handleChange} required />
      <input type="date" name="dateOfConception" value={formData.dateOfConception} onChange={handleChange} required />
      <input type="text" name="typeOfConception" placeholder="Type of Conception" value={formData.typeOfConception} onChange={handleChange} required />
      <button type="submit">Add Cow</button>
    </form>
  );
};

export default AddCowForm;