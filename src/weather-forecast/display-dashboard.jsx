import React, { useEffect, useRef, useState } from 'react';
import LocationInput from './location-input';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState({});
  const cityRef = useRef();
  const countryRef = useRef();


  const handleSubmit = async () => {
    const [latitude, longitude] = await getLocatation(
      cityRef.current.value,
      countryRef.current.value
    );
    console.log(latitude, longitude);
    await getWeatherData(latitude, longitude);
  };

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div style={{padding: '64px'}}>
      <LocationInput />
    </div>
  );
};

export default WeatherDashboard;
