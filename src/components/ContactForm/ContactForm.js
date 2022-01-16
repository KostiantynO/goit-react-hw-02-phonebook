import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = { name: '', number: '' };

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };

    this.setState(data, () => this.props.onSubmit(this.state));
    form.reset();
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
