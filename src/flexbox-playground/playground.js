import React from 'react';
import Display from './display';
import StyleBox from './styleBox';

const Playground = () => {
  const playgroundStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  });
  const isDesktop = true;

  return (
    <div style={playgroundStyle(isDesktop)}>
      <h3
        style={{
          textAlign: 'center'
        }}
      >
        Flexbox Playground
      </h3>
      <Display boxCount={10} rules={{ justifyContent: 'space-between' }} />
      <StyleBox ruleName={'justify-content'} options={['flex-start(default)', 'center', 'flex-end']} />
    </div>
  );
};

export default Playground;
