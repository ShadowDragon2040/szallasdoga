import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SzallasCard from './Card';
import { Link } from 'react-router-dom';

function Home() {
    const [szallasData, setSzallasData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get('https://nodejs.sulla.hu/data');
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
      <div className="container"   style={{ width: '80%', margin: 'auto' }}>
          <h1   style={{textAlign: 'center'}}>Szállások</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row">
              {szallasData.map((data, index) => (
                    <SzallasCard key={index} data={data} />
              ))}
            </div>
          )}
      </div>
    );
}

export default Home