import React from 'react';
import CustomButton from './customButton';

const NumericButton = () => {
  let buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(<CustomButton label={`${i}`} key={i} />);
  }

  return <div>{buttons}</div>;
};

export default NumericButton;
