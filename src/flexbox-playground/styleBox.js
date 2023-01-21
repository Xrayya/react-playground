import React from 'react';

const StyleBox = ({ ruleName, options, preset }) => {
  const listOfOptions = options.map((opt, index) => (
    <li
      key={index}
      style={{
        listStyle: 'none',
        display: 'flex',
        textAlign: 'center',
        gap: '4px',
      }}
    >
      <input
        type='radio'
        name={ruleName}
        id={ruleName + opt}
        defaultChecked={opt === preset}
      />
      <label htmlFor={ruleName + opt}>{opt}</label>
    </li>
  ));

  return (
    <div
      style={{
        height: 'fit-content',
        border: '4px solid grey',
        borderRadius: '8px',
        padding: '8px',

        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>{ruleName}</h4>
      <hr />
      <ul>{listOfOptions}</ul>
    </div>
  );
};

export default StyleBox;
