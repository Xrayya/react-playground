import React, { useEffect, useRef, useState } from 'react';
import LocationInput from './location-input';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState({});

  const handleOnSelect = (weatherData) => {
    setWeatherData(weatherData);
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div style={{ padding: '64px' }}>
      <LocationInput onSelect={handleOnSelect} />
    </div>
  );
};

export default WeatherDashboard;
