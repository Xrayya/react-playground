import React from 'react';

const CustomButton = ({ label, onClick }) => {
  return (
    <input
      type='button'
      style={{ paddingLeft: '4px', paddingRight: '4px' }}
      value={typeof label == 'string' ? label : 'CustomButton'}
      onClick={typeof onClick == 'function' ? onClick : () => {}}
    />
  );
};

// export { CustomButton };
export default CustomButton;
