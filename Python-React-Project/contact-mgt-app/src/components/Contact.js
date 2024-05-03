import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Contact = ({
  id,
  FirstName,
  LastName,
  PhoneNumber,
  date,
  handleRemoveContact
}) => {

    const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="contact">
      <Card.Body>
        <Card.Title className="contact-title">{FirstName}</Card.Title>
        <div className="contact-details">
          <div>LastName: {LastName}</div>
          <div>PhoneNumber: {PhoneNumber} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveContact(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Contact;