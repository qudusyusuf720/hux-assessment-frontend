import React from 'react';
import ContactForm from './ContactForm';
import { useParams } from 'react-router-dom';

const EditContact = ({ history, contacts, setContacts }) => {
  const { id } = useParams();
  const contactToEdit = contacts.find((contact) => contact.id === id);

  const handleOnSubmit = (contact) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([contact, ...filteredContacts]);
    history.push('/');
  };

  return (
    <div>
      <ContactForm contact={contactToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditContact;