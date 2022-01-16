import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList';
/* import PropTypes from 'prop-types' */

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  onChangeFilter = e => this.setState({ filter: e.currentTarget.value });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  isSaved = newName => {
    const { contacts } = this.state;

    const contact = contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase(),
    );

    if (contact) {
      alert(`${contact.name} is already in the contacts`);
    } else {
      return true;
    }
  };

  onAddContactSubmit = ({ name, number }) => {
    if (!this.isSaved(name)) return;

    const contact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const contacts = this.getVisibleContacts();
    console.log('App ~ render ~ contacts', contacts);

    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.onAddContactSubmit} />
        </div>
        <h2>Contacts</h2>
        <Filter onChange={this.onChangeFilter} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
