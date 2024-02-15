import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const NewCard = ({ onCardSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    hostname: '',
    price: '',
    location: '',
    minimum_nights: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nodejs.sulla.hu/data', formData);
      console.log("Post request successful:", response.data);
      if (onCardSubmit) {
        onCardSubmit(response.data);
      }
    } catch (error) {
      console.error("Post request failed:", error);
    }
  };

  return (
    <div >
    <h1 style={{textAlign: 'center'}}>Add new card</h1>
    <Card style={{ width: '50%', margin: 'auto',marginTop: '50px' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formHostname">
            <Form.Label>Hostname</Form.Label>
            <Form.Control
              type="text"
              name="hostname"
              value={formData.hostname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formMinimumNights">
            <Form.Label>Minimum Nights</Form.Label>
            <Form.Control
              type="number"
              name="minimum_nights"
              value={formData.minimum_nights}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default NewCard;
