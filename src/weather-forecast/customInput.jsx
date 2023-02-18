import React from 'react';

const CustomInput = ({ title, type, onChange }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} onChange={onChange} />
    </div>
  );
};

export default CustomInput;
