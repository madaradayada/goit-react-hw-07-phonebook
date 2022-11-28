import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Button } from './ContactItemStyled';

export const ContactItem = ({contact}) => {
    const dispatch = useDispatch();
    const onDelete = () => {
      dispatch(deleteContact(contact.id));
    };
    return (
        <Item>
          <p>
            {contact.name}: {contact.phone}
          </p>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </Item>
    );
  };