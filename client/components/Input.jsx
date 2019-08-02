/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

const InputForm = ({ fields, handleChange }) => (
  <form className="form-group">
    {
    fields.map(field => (
      <div key={field.name}>
        <label htmlFor={field.name}>{field.name}</label>
        <input
          className="field-input"
          onChange={handleChange}
          name={field.name}
          type={field.type}
          value={field.value}
        />
      </div>
    ))
  }
  </form>
);

InputForm.propTypes = propTypes;

export default InputForm;
