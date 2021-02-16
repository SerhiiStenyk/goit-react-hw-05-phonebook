import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
