import React from 'react';

const Controller = ({ title, type, suffix, defaultValue, onChange }) => {
  return (
    <div>
      <label htmlFor={title}>{title}: </label>
      <input
        type={type}
        id={title}
        name={title}
        defaultValue={defaultValue}
        onChange={() => onChange(event)}
      />
      <span>{` ${suffix ? suffix : ''}`}</span>
    </div>
  );
};

export default Controller;
