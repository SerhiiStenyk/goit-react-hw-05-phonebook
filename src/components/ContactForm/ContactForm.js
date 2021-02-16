import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className={s.label}>
            {' '}
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            {' '}
            Phone
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={s.btn} type="submit" disabled={!name}>
            {' '}
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export default ContactForm;
