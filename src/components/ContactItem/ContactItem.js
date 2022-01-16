export const ContactItem = ({ id, name, number }, onDeleteContact) => (
  <li key={id}>
    <span>{name}</span>&nbsp;<span>{number}</span>
    <button onClick={() => onDeleteContact(id)}>X</button>
  </li>
);
