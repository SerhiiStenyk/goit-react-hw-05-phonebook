import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';
import errorStyles from './components/Notification/Notification.module.css';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
    error: false,
  };
  componentDidMount() {
    const existedContacts = localStorage.getItem('contacts');
    if (existedContacts) {
      this.setState({ contacts: JSON.parse(existedContacts) });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const duplicate = this.state.contacts.some(
      item => item.name === contact.name,
    );
    if (duplicate) return this.toggleError(); 

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };
  toggleError = () => {
    this.setState({ error: true });
    setTimeout(() => { this.setState({ error:false }) }, 2000);
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  findContact = () => {
    const { contacts, filter } = this.state;
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize),
    );
  };
  render() {
    const { filter, contacts, error } = this.state;
    const filtredContacts = this.findContact();
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        
        <ContactForm onSubmit={this.addContact} />
    
        <CSSTransition
          in={contacts.length > 1}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Filter value={filter} onChange={this.changeFilter} />
        </CSSTransition>

        <CSSTransition
          in={contacts.length > 0}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
        </CSSTransition>
        
        <CSSTransition
          in={error}
          classNames={errorStyles}
          timeout={250}
          unmountOnExit
        >
          <Notification/>
        </CSSTransition>
        
        
        
      </div>
    );
  }
}

export default App;
