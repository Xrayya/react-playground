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

  for (let i = 0; i < boxCount; i++)
    return (
      <div
        style={{
          width: `${containerWidth}%`,
          height: `${containerHeight}px`,
          border: '4px solid grey',
          borderRadius: '8px',
          padding: '8px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: rules.justifyContent,
            alignItems: rules.alignItems,
            flexDirection: rules.flexDirection,
            flexWrap: rules.flexWrap,
            gap: `${boxGap}px`,
          }}
        >
          {boxes}
        </div>
      </div>
    );
};

export default Display;
