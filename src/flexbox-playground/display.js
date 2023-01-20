import React from 'react';
import Box from './box';

const Display = ({boxCount}) => {
  const boxWidth = '36px';
  const boxHeight = '36px';
  const boxColor = 'aquamarine';

  return (
    <div
      style={{
        width: '100%',
        border: '4px solid grey',
        borderRadius: '8px',
          padding: '8px'
      }}
    >
    <Box width={boxWidth} height={boxHeight} color={boxColor} />
    </div>
  );
};

export default Display;
