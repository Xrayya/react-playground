import React from 'react';
const Box = ({ width, height, color, children }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
