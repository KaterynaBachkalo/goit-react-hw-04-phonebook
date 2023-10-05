import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          name={name}
          id={id}
          key={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
