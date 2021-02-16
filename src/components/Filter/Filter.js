import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
