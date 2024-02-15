import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SzallasCard = ({ data }) => {
  const { id, name, hostname, price, location, minimum_nights } = data;

  return (
    <NavLink to={`/SoloCard/${id}`} style={{ textDecoration: 'none' }}>
      <Card className='container' style={{marginTop: '20px', width: '18rem',backgroundColor: 'lightblue',borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Id: {id}</p>
            <p>Hostname: {hostname}</p>
            <p>Price: {price} $</p>
            <p>Location: {location}</p>
            <p>Minimum Nights: {minimum_nights} nights</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default SzallasCard;
