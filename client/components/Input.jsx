/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/login.scss';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const InputForm = ({ fields, handleChange }) => (
  // second level of form
  <form className="container">
    {fields.map(field => (
      <div key={field.name}>
        <label className="input-label" htmlFor={field.name}>
          {field.name}
        </label>
        <div className="input-box">
          <input
            className="input"
            id={field.id}
            onChange={handleChange}
            name={field.name}
            type={field.type}
            value={field.value}
          />
        </div>
      </div>
    ))}
  </form>
);

InputForm.propTypes = propTypes;

export default InputForm;
