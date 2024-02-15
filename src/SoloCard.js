import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SoloCard = ({ data }) => {
  const param = useParams();
  const id = param.id;
  const [adat, setAdat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://nodejs.sulla.hu/data/${id}`);
        setAdat(response.data);
        setLoading(false);
        console.log("Data successfully retrieved:", response.data);
      } catch (error) {
        console.error("Data failed to be retrieved:", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Card: {adat.id}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Card  style={{ margin:"auto", marginTop: '20px', width: '18rem',backgroundColor: 'lightblue',borderRadius: '10px' }}>
          <Card.Body>
            <Card.Title>{adat.name}</Card.Title>
            <Card.Text>
              <p>Id: {adat.id}</p>
              <p>Hostname: {adat.hostname}</p>
              <p>Price: {adat.price} $</p>
              <p>Location: {adat.location}</p>
              <p>Minimum Nights: {adat.minimum_nights} nights</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SoloCard;
