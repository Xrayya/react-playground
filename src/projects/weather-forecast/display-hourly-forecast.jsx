import React from 'react';
import HourlyForecastWrapper from './hourly-forecast-wrapper';

const DisplayHourlyForecast = ({ timeData, temperatureData }) => {
  return (
    <div>
      {timeData.map((value, index) => (
        <HourlyForecastWrapper
          key={index}
          time={value}
          temperature={temperatureData[index]}
        />
      ))}
    </div>
  );
};

export default DisplayHourlyForecast;
