import React from 'react';
import HourlyForcastWrapper from './hourly-forecast-wrapper';

const DisplayHourlyForecast = ({
  time,
  temperature,
  apparentTemparature,
  weatherCode,
  visibility,
  windSpeed,
  windDirection,
  unit,
}) => {
  let hourlyTemperature = [];
  for (let i = 0; i < temperature.length; i++) {
    const date = new Date(time[i]);
    hourlyTemperature.push(
      <HourlyForcastWrapper
        key={i}
        time={`${date.getHours()}:00`}
        temperature={temperature[i]}
        weatherCode={weatherCode[i]}
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
        // flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      {hourlyTemperature}
    </div>
  );
};

export default DisplayHourlyForecast;
