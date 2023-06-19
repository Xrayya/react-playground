import React from 'react';

const HourlyForecastWrapper = ({ time, temperature }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>{time}</div>
      <div>{temperature}</div>
    </div>
  );
};

export default HourlyForecastWrapper;
