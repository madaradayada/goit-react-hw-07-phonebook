import React from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from './ContactListStyled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};
