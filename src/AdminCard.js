import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AdminSzallasCard = ({ data }) => {
  const { id, name, hostname, price, location, minimum_nights } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name,
    hostname,
    price,
    location,
    minimum_nights,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://nodejs.sulla.hu/data/${id}`, editedData);
      console.log("Put request successful:", response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Put request failed:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({
      name,
      hostname,
      price,
      location,
      minimum_nights,
    });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://nodejs.sulla.hu/data/${id}`);
      console.log("Delete request successful:", response.data);
    } catch (error) {
      console.error("Delete request failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Link to={`/SoloCard/${id}`} style={{ textDecoration: 'none' }}>
    <Card className='container' style={{marginTop: '20px', width: '18rem',backgroundColor: 'lightblue',borderRadius: '10px' }}>
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formHostname">
              <Form.Label>Hostname</Form.Label>
              <Form.Control
                type="text"
                name="hostname"
                value={editedData.hostname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedData.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={editedData.location}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formMinimumNights">
              <Form.Label>Minimum Nights</Form.Label>
              <Form.Control
                type="number"
                name="minimum_nights"
                value={editedData.minimum_nights}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        ) : (
          <>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Id: {id}</p>
              <p>Hostname: {hostname}</p>
              <p>Price: {price} $</p>
              <p>Location: {location}</p>
              <p>Minimum Nights: {minimum_nights} nights</p>
            </Card.Text>
          </>
        )}
        {isEditing ? (
          <>
            <button style={{marginRight: '10px',backgroundColor: 'yellow',borderRadius: '10px' }} onClick={handleSave}>Save</button>
            <button style={{marginRight: '10px',backgroundColor: 'green',borderRadius: '10px' }} onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button style={{marginRight: '10px',backgroundColor: 'yellow',borderRadius: '10px' }} onClick={handleEdit}>Editing</button>
            <button style={{marginRight: '10px',backgroundColor: 'red',borderRadius: '10px' }} onClick={handleDelete}>Delete</button>
          </>
        )}
      </Card.Body>
    </Card>
    </Link>
  );
};

export default AdminSzallasCard;
