import React from 'react';
import HourlyTemperatureWrapper from './hourly-temperature-wrapper';

const DisplayHourlyTemperature = ({ temperature, time }) => {
  let hourlyTemperature = [];
  for (let i = 0; i < temperature.length; i++) {
    const date = new Date(time[i]);
    hourlyTemperature.push(
      <HourlyTemperatureWrapper
        key={i}
        time={`${date.getHours()}:00`}
        temperature={temperature[i]}
        weather='not yet implemented'
      />
    );
  }
  return (
    <div
      style={{
        width: '100%',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
      }}
    >
      {hourlyTemperature}
    </div>
  );
};

export default DisplayHourlyTemperature;
