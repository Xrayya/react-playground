import React, { useEffect, useState } from 'react';
import Controller from './controller';
import Display from './display';
import StyleBox from './styleBox';

const Playground = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [displayRules, setDisplayRules] = useState({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });
  const [boxCount, setBoxCount] = useState(10);
  const [boxGap, setBoxGap] = useState(0);
  const [boxWidth, setBoxWidth] = useState(36);
  const [boxHeight, setBoxHeight] = useState(36);
  const [displayHeight, setDisplayHeight] = useState(60);
  const [displayWidth, setDisplayWidth] = useState(100);

  const playgroundStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });

  const handleStyleBoxOnChange = (ruleName, selectedOption) => {
    setDisplayRules((rules) => {
      let newRules = { ...rules };
      newRules[kebabToCamel(ruleName)] = selectedOption;
      return newRules;
    });
  };

  const handleControllerOnChange = (event, setter) => {
    setter(event.target.value);
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
      <Display
        containerWidth={displayWidth}
        containerHeight={displayHeight}
        boxCount={boxCount}
        boxGap={boxGap}
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        rules={displayRules}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            border: '4px solid grey',
            borderRadius: '8px',
            padding: '4px',

            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <h3>Box Control</h3>
          <hr />
          <Controller
            title='Box Count'
            type='number'
            defaultValue={boxCount}
            onChange={(event) => {
              setBoxCount(event.target.value);
            }}
          />
          <Controller
            title='Gap'
            type='number'
            suffix='px'
            defaultValue={boxGap}
            onChange={(event) => {
              setBoxGap(event.target.value);
            }}
          />
          <Controller
            title='Box Width'
            type='number'
            suffix='px'
            defaultValue={boxWidth}
            onChange={(event) => {
              setBoxWidth(event.target.value);
            }}
          />
          <Controller
            title='Box Height'
            type='number'
            suffix='px'
            defaultValue={boxHeight}
            onChange={(event) => {
              setBoxHeight(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            border: '4px solid grey',
            borderRadius: '8px',
            padding: '4px',

            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <h3>Display Control</h3>
          <hr />
          <Controller
            title='Display Width'
            type='number'
            suffix='%'
            defaultValue={displayWidth}
            onChange={(event) => {
              setDisplayWidth(event.target.value);
            }}
          />
          <Controller
            title='Display Height'
            type='number'
            suffix='px'
            defaultValue={displayHeight}
            onChange={(event) => {
              setDisplayHeight(event.target.value);
            }}
          />
        </div>
      </div>
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
          onChange={handleStyleBoxOnChange}
        />
        <StyleBox
          ruleName={'align-items'}
          options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
          defaultOpt='flex-start'
          preChecked='flex-start'
          onChange={handleStyleBoxOnChange}
        />
        <StyleBox
          ruleName={'flex-direction'}
          options={['row', 'row-reverse', 'column', 'column-reverse']}
          defaultOpt='row'
          preChecked='row'
          onChange={handleStyleBoxOnChange}
        />
        <StyleBox
          ruleName={'flex-wrap'}
          options={['nowrap', 'wrap', 'wrap-reverse']}
          defaultOpt='nowrap'
          preChecked='wrap'
          onChange={handleStyleBoxOnChange}
        />
      </div>
    </div>
  );
};

let setupRules = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'row',
  flexWrap: 'wrap',
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
