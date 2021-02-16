import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { BsFillXSquareFill } from "react-icons/bs";

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.item}>
      {' '}
      <span>{name}</span> <span>{number}</span>
        <button
          className={s.delete}
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          <BsFillXSquareFill className={s.icon} />
        </button>
      
      
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
