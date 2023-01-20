import React from 'react';
import Display from './display';

const Playground = () => {
  const playgroundStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
  });
  const isDesktop = true;

  return (
    <div style={playgroundStyle(isDesktop)}>
      <h3
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Flexbox Playground
      </h3>
      <Display />
    </div>
  );
};

export default Playground;
