import React, { useEffect, useRef, useState } from 'react';
import DisplayHourlyTemperature from './display-hourly-temperature';
import './style.css';

const DisplayWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const cityRef = useRef();
  const countryRef = useRef();

  async function getLocatation(cityName, country) {
    const api = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    const result = await fetch(api);
    const locData = await result.json();
    let coordinate = [null, null];
    locData.results.forEach((loc) => {
      if (loc.country.toLowerCase() == country.toLowerCase()) {
        coordinate = [loc.latitude, loc.longitude];
      }
    });

    return coordinate;
  }

  async function getWeatherData(latitude, longitude) {
    const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
    const result = await fetch(api);
    const locWeather = await result.json();
    setWeatherData(locWeather);
  }

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
    <div style={{ color: 'white', padding: '64px' }}>
      <h3 style={{ textAlign: 'center' }}>Display Weather</h3>
      <div>
        <label htmlFor='city'>Enter the city: </label>
        <input ref={cityRef} type='text' name='location' id='city' />
      </div>
      <div>
        <label htmlFor='country'>Enter the country: </label>
        <input ref={countryRef} type='text' name='location' id='country' />
      </div>
      <input type='submit' onClick={handleSubmit} />
      <DisplayHourlyTemperature
        temperature={
          weatherData.hourly ? weatherData.hourly.temperature_2m : []
        }
        time={weatherData.hourly ? weatherData.hourly.time : []}
      />
    </div>
  );
};

export default DisplayWeather;
