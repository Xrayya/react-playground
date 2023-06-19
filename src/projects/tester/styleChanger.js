import React, { useEffect, useState } from 'react';

const StyleChanger = () => {
  const [useColor, setColor] = useState('red');
  const [test, setTest] = useState({ aKey: 'red' });

  useEffect(() => {console.log('triggered')}, [test])

  return (
    <div
      style={{
        color: 'white',
      }}
    >
      <div
        style={{ width: '200px', height: '200px', backgroundColor: test.aKey }}
      ></div>
      <span>Colors options</span>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <li>
          <input
            type='button'
            name='color'
            id='red'
            value='red'
            onClick={() => {
              setColor('red');
              setTest((value) => {
                let newValue = { ...value }
                newValue.aKey = 'red';
                return newValue;
              });
              console.log(test.aKey);
            }}
          />
          {/* <label htmlFor='red'>red</label> */}
        </li>
        <li>
          <input
            type='button'
            name='color'
            id='blue'
            value='blue'
            onClick={() => {
              setColor('blue');
              setTest((value) => {
                let newValue = { ...value }
                newValue.aKey = 'blue';
                return newValue;
              });
              console.log(test.aKey);
            }}
          />
          {/* <label htmlFor='blue'>blue</label> */}
        </li>
      </ul>
    </div>
  );
};

export default StyleChanger;
