import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
      { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
      { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
      { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
    ],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({
      contacts: parsedContacts,
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem("contacts", stringifiedContacts);
    }
  }

  addContact = data => {
    const newContact = {
      ...data,
    };

    const isExistContactName = this.state.contacts.some(
      contact => data.name === contact.name
    );

    if (isExistContactName) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  filterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="phonebook-wrapper">
          <h1 className="phonebook-title">Phonebook</h1>
          <ContactForm addContact={this.addContact} />
        </div>

        <h2 className="contacts-title">Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.filterChange} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
