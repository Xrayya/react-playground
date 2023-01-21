import React from 'react';

const StyleBox = ({ ruleName, options }) => {
  const listOfOptions = options.map((opt, index) => (
    <li key={index} style={{ listStyle: 'none' }}>
      <input type='radio' name='options' id={opt} />
      <label htmlFor={opt}>{opt}</label>
    </li>
  ));

  return (
    <div
      style={{
        width: '300px',
        height: 'fit-content',
        border: '4px solid grey',
        borderRadius: '8px',
        padding: '8px',

        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}
    >
      <h4 style={{ textAlign: 'center' }}>{ruleName}</h4>
      <hr />
      <ul>{listOfOptions}</ul>
    </div>
  );
};

export default StyleBox;
