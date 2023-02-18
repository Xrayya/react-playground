import React from 'react';

const HourlyTemperatureWrapper = ({ time, temperature, weather }) => {
  return (
    <div
      style={{
        width: '96px',
        height: '96px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <span style={{ textAlign: 'center' }}>{temperature}</span>
      <span style={{ textAlign: 'center' }}>{weather}</span>
      <span style={{ textAlign: 'center' }}>{time}</span>
    </div>
  );
};

export default HourlyTemperatureWrapper;
