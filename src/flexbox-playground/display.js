import React from 'react';
import Box from './box';

const Display = ({
  containerWidth,
  containerHeight,
  boxCount,
  boxGap,
  boxWidth,
  boxHeight,
  rules,
}) => {
  const boxColor = 'aquamarine';

  let boxes = [];
  for (let i = 0; i < boxCount; i++) {
    boxes.push(
      <Box
        key={i}
        width={`${boxWidth}px`}
        height={`${boxHeight}px`}
        color={boxColor}
      />
    );
  }

  for (let i = 0; i < boxCount || 0; i++)
    return (
      <div
        style={{
          width: `${containerWidth || 100}%`,
          height: `${containerHeight || 60}px`,
          border: '4px solid grey',
          borderRadius: '8px',
          padding: '8px',
          boxSizing: 'border-box',

          overflow: 'hidden',

          display: 'flex',
          justifyContent: rules.justifyContent,
          alignItems: rules.alignItems,
          alignContent: rules.alignContent,
          flexDirection: rules.flexDirection,
          flexWrap: rules.flexWrap,
          gap: `${boxGap || 0}px`,
        }}
      >
        {boxes}
      </div>
    );
};

export default Display;
