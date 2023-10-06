import { useState } from 'react';

import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);

    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.title}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.title}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
