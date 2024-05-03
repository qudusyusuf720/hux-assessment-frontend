import React from 'react';
import ContactForm from "./ContactForm";

  const AddContact = ({ history, contacts, setContacts }) => {
    const handleOnSubmit = (contact) => {
      setContacts([contact, ...contacts]);
      history.push('/');
    };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContact;