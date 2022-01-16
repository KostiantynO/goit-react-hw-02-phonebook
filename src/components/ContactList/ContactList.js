import { ContactItem } from '../ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>{contacts.map(contact => ContactItem(contact, onDeleteContact))}</ul>
);
