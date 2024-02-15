import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SzallasCard from './Card';

function Data() {
  const [szallasData, setSzallasData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://localhost:7067/WeatherForecast');
        setSzallasData(response.data);
        setLoading(false);
        console.log("Data successfully retrieved:", response.data);
      } catch (error) {
        console.error("Data failed to be retrieved:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h1>Szállások</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {szallasData.map((data, index) => (
              <SzallasCard key={index} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;
