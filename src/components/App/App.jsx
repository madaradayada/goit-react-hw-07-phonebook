import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { filterContacts } from 'redux/slice/filterSlice';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selector';

import { Container, Section, Title } from './AppStyled';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

   const addNewContact = ({ name, phone }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(
      contact => contact.phone === phone
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }   
     dispatch(addContact({ name, phone }));
  };
  
  const handleFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilterContact = () => {
    if (!filterName) {
      return contacts;
    }
    const normalaizedFilter = filterName.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

  return (
        <Container>
          <Section title="Phonebook">
          <Title font = '24'>Phonebook</Title>
            <ContactForm onAddContacs={addNewContact} />
          </Section>
          <Section title="Contacts">
          <Title font = '20'>Contacts</Title>
            <Filter value={filterName} onChange={handleFilter} />
            <ContactList
              contacts={getFilterContact()}             
            />
          </Section>
        </Container>
      );
}

 