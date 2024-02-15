import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSzallasCard from './AdminCard';

function AdminHome() {
    const [adminSzallasData, setAdminSzallasData] = useState([]);
    const [adminLoading, setAdminLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setAdminLoading(true);
          const response = await axios.get('https://nodejs.sulla.hu/data');
          setAdminSzallasData(response.data);
          setAdminLoading(false);
          console.log("Data successfully retrieved:", response.data);
        } catch (error) {
          console.error("Data failed to be retrieved:", error);
          setAdminLoading(false);
        }
      };
  
      fetchData();
    }, []);

    return (
      <div  className="container" style={{ width: '80%', margin: 'auto'}}>
          <h1 style={{textAlign: 'center'}}>Szállások</h1>
          {adminLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="row">
              {adminSzallasData.map((data, index) => (
                <AdminSzallasCard key={index} data={data} />
              ))}
            </div>
          )}
      </div>
    );
}

export default AdminHome