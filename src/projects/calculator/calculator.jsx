import React from 'react';
import NumericButton from './numericButton';

const Calculator = () => {
  const calculatorStyle = (isDesktop) => ({
    color: '#fafafa',
    padding: isDesktop ? '64px' : '16px',
  });
  let isDesktop = true;

  return (
    <div style={calculatorStyle(isDesktop)}>
      <h3>React Calculator</h3>
      <div>
        <NumericButton />
      </div>
    </div>
  );
};

export default Calculator;
