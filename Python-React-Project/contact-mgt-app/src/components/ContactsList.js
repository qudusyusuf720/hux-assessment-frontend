import React from 'react';
import _ from 'lodash';
import Contact from './Contact';

const ContactsList = ({ contacts, setContacts }) => {

  const handleRemoveContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <React.Fragment>
      <div className="contact-list">
        {!_.isEmpty(contacts) ? (
          contacts.map((contact) => (
            <Contact key={contact.id} {...contact} handleRemoveContact={handleRemoveContact} />
          ))
        ) : (
          <p className="message">No contacts available. Please add some contacts.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactsList;