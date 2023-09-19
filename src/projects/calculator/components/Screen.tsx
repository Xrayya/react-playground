import React from 'react'
import { screenProps } from '../Calculator.types';

const Screen : React.FC<screenProps> = ({ displayString }) => {
  return (
    <div className="h-16 p-2 flex items-center bg-gray-300 rounded-lg">
      {displayString}
    </div>
  );
};

export default Screen;

