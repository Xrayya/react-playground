import React, { useState } from 'react';
import Display from './display';
import StyleBox from './styleBox';

const Playground = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [displayRules, setDisplayRules] = useState({});

  const playgroundStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });

  const handleOnClick = (ruleName, selectedOption) => {
    setDisplayRules((rules) => {
      rules[kebabToCamel(ruleName)] = selectedOption;
      return rules;
    });
    console.log(displayRules);
  };

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
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
          ]}
          defaultOpt='flex-start'
          preChecked='flex-start'
          onClick={handleOnClick}
        />
        <StyleBox
          ruleName={'align-items'}
          options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
          defaultOpt='flex-start'
          preChecked='flex-start'
          onClick={handleOnClick}
        />
        <StyleBox
          ruleName={'flex-direction'}
          options={['row', 'row-reverse', 'column', 'column-reverse']}
          defaultOpt='row'
          preChecked='row'
          onClick={handleOnClick}
        />
        <StyleBox
          ruleName={'flex-wrap'}
          options={['nowrap', 'wrap', 'wrap-reverse']}
          defaultOpt='nowrap'
          preChecked='wrap'
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

function kebabToCamel(str) {
  let arr = str.split('-');
  let camel = arr.map(
    (item, index) =>
      (index ? item.charAt(0).toUpperCase() : item.charAt(0)) +
      item.slice(1).toLowerCase()
  );
  let camelStr = camel.join('');

  return camelStr;
}

export default Playground;
