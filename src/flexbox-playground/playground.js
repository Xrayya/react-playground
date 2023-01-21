import React from 'react';
import Display from './display';
import StyleBox from './styleBox';

const Playground = () => {
  const playgroundStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });
  const isDesktop = true;

  return (
    <div style={playgroundStyle(isDesktop)}>
      <h3
        style={{
          textAlign: 'center',
        }}
      >
        Flexbox Playground
      </h3>
      <Display boxCount={10} rules={{ justifyContent: 'space-between' }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '8px',
        }}
      >
        <StyleBox
          ruleName={'justify-content'}
          options={[
            'flex-start (default)',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
          ]}
          preset='flex-start (default)'
        />
        <StyleBox
          ruleName={'align-items'}
          options={[
            'flex-start (default)',
            'flex-end',
            'center',
            'baseline',
            'stretch',
          ]}
          preset='flex-start (default)'
        />
        <StyleBox
          ruleName={'flex-direction'}
          options={['row (default)', 'row-reverse', 'column', 'column-reverse']}
          preset='row (default)'
        />
        <StyleBox
          ruleName={'flex-wrap'}
          options={['nowrap (default)', 'wrap', 'wrap-reverse']}
          preset='wrap'
        />
      </div>
    </div>
  );
};

export default Playground;
