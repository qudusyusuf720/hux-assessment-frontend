import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
  const [contact, setcontact] = useState({
    FirstName: props.contact ? props.contact.FirstName : '',
    LastName: props.contact ? props.contact.LastName : '',
    PhoneNumber: props.contact ? props.contact.PhoneNumber : '',
    date: props.contact ? props.contact.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { FirstName, LastName, PhoneNumber } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [FirstName, LastName, PhoneNumber ];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contact = {
        id: uuidv4(),
        FirstName,
        LastName,
        PhoneNumber,
        date: new Date()
      };
      props.handleOnSubmit(contact);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      /*case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setcontact((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;*/
      case 'PhoneNumber':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setcontact((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setcontact((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="FirstName"
            value={FirstName}
            placeholder="Enter your First Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="LastName"
            value={LastName}
            placeholder="Enter your Last Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="PhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="PhoneNumber"
            value={PhoneNumber}
            placeholder="Enter your Phone Number"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;