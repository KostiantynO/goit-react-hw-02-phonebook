import { Component, nanoid, Section } from 'common';

import ContactForm from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { AppStyled } from './App.styled';

const INITIAL_STATE = Object.freeze({
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
});

export default class App extends Component {
  state = { ...INITIAL_STATE };

  changeFilter = e => this.setState({ filter: e.currentTarget.value });
  clearFilter = () => this.setState({ filter: '' });

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

  addContact = ({ name, number }) => {
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
    const { filter } = this.state;
    const contacts = this.getVisibleContacts();
    console.log('App ~ render ~ contacts', contacts);

    return (
      <AppStyled>
        <Section title="Phonebook" h="1">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            filter={filter}
            onChange={this.changeFilter}
            onClearFilter={this.clearFilter}
          />

          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
