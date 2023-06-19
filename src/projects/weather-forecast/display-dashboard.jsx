import React, { useEffect, useRef, useState } from 'react';
import DisplayHourlyForecast from './display-hourly-forecast';
import LocationInput from './location-input';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleOnSelect = (weatherData) => {
    setWeatherData(weatherData);
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div style={{ padding: '64px' }}>
      <LocationInput onSelect={handleOnSelect} />
      {weatherData && (
        <DisplayHourlyForecast
          timeData={weatherData.hourly.time}
          temperatureData={weatherData.hourly.temperature_2m}
        />
      )}
    </div>
  );
};

export default WeatherDashboard;
