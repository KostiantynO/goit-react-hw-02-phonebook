import { Component, PropTypes, Container, Button, Label } from 'common';

const INITIAL_STATE = Object.freeze({ name: '', number: '' });

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const newData = {
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };

    this.setState(newData, () => this.props.onSubmit(this.state));
    form.reset();
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    return (
      <Container>
        <form onSubmit={this.addContact}>
          <Label label="Name">
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label label="Number">
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </Container>
    );
  }
}
