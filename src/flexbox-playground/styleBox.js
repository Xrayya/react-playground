import React  from 'react';

const StyleBox = ({ ruleName, options, defaultOpt, preChecked, onChange }) => {
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
        name={ruleName || 'unknown rule'}
        id={ruleName + opt}
        defaultChecked={opt === preChecked}
        onChange={() => onChange(ruleName, opt)}
      />
      <label htmlFor={ruleName + opt}>
        {opt + (opt === defaultOpt ? ' (default)' : '')}
      </label>
    </li>
  ));

  return (
    <div
      style={{
        height: '100%',
        flexGrow: 1,
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
