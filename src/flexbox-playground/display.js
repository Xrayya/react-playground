import React from 'react';
import Box from './box';

const Display = ({ boxCount, rules }) => {
  const boxWidth = '36px';
  const boxHeight = '36px';
  const boxColor = 'aquamarine';
  
  rules.display = 'flex'

  let boxes = [];
  for (let i = 0; i < boxCount; i++) {
    boxes.push(
      <Box key={i} width={boxWidth} height={boxHeight} color={boxColor} />
    );
  }

  for (let i = 0; i < boxCount; i++) {
    boxes.push();
  }

  for (let i = 0; i < boxCount; i++)
    return (
      <div
        style={{
          width: '100%',
          border: '4px solid grey',
          borderRadius: '8px',
          padding: '8px',
        }}
      >
        <div style={rules}>{boxes}</div>
      </div>
    );
};

export default Display;
