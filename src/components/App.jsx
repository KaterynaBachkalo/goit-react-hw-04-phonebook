import { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
        { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
        { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
        { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isExistContactName = contacts.some(contact => name === contact.name);

    if (isExistContactName) {
      alert(`${name.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="container">
      <div className="phonebook-wrapper">
        <h1 className="phonebook-title">Phonebook</h1>
        <ContactForm addContact={addContact} />
      </div>

      <h2 className="contacts-title">Contacts</h2>
      <Filter filter={filter} onChange={filterChange} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={onDeleteContact}
      />
    </div>
  );
};
