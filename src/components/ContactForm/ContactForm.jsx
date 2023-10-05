import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });

    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target: { name, value, id } }) => {
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.title}>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.title}>
          Number:
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}
