import React from 'react';
import WeatherCodeTranslator from './weather-code-translator';

const HourlyForecastWrapper = ({ time, temperature, weatherCode }) => {
  return (
    <div
      style={{
        width: '250px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <span style={{ textAlign: 'center' }}>{temperature}</span>
      {/* <span style={{ textAlign: 'center' }}>{weather}</span> */}
      <WeatherCodeTranslator weatherCode={weatherCode} />
      <span style={{ textAlign: 'center' }}>{time}</span>
    </div>
  );
};

export default HourlyForecastWrapper;
