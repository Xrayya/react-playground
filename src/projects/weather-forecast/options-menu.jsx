import React from 'react';

const OptionsMenu = ({ data, style, onSelect }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
    >
      {data.map((data, index) => (
        <button
          type='button'
          key={index}
          value={`${data.latitude} ${data.longitude}`}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'lightgrey';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
          onClick={onSelect}
          style={{
            width: '100%',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            padding: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >{`${data.name}, ${data.country}`}</button>
      ))}
    </div>
  );
};

export default OptionsMenu;
