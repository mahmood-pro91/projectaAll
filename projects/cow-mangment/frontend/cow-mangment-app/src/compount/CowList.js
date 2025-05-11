import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CowList = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    fetchCows();
  }, []);

  const fetchCows = async () => {
    try {
      const response = await axios.get('/api/cows');
      setCows(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cow List</h2>
      <ul>
        {cows.map(cow => (
          <li key={cow._id}>
            {cow.name} - {cow.typeOfCow} - {new Date(cow.dateOfConception).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CowList;