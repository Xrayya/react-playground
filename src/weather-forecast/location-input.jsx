import React, { useEffect, useState } from 'react';

const LocationInput = ({ onSelect }) => {
  const [locList, setLocLists] = useState([]);

  async function getLocatation(cityName) {
    const api = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    const result = await fetch(api);
    const locData = await result.json();
    setLocLists(locData.results);
  }

  async function getWeatherData(latitude, longitude) {
    const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,apparent_temperature,windspeed_10m,winddirection_10m,visibility`;
    const result = await fetch(api);
    const locWeather = await result.json();
    return locWeather;
  }

  const handleOnChange = (e) => {
    getLocatation(e.target.value);
  };

  const handleOnSelect = async (e) => {
    console.log('t');
    const weatherData = await getWeatherData(
      e.target.value[0],
      e.target.value[1]
    );
    console.log(weatherData);
    onSelect(weatherData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        type='text'
        onChange={handleOnChange}
        onFocus={(e) => {
          e.target.value = '';
          e.target.style.outline = 'none';
          e.target.style.border = 'solid 2px grey';
        }}
        onBlur={(e) => {
          if (e.target.value === '') {
            e.target.value = 'Input Your Location';
            e.target.style.border = 'solid 2px lightgrey';
          }
        }}
        defaultValue='Input Your Location'
        style={{
          width: '300px',
          padding: '8px',
          fontSize: '16px',
          textAlign: 'center',
          color: 'grey',
          border: 'solid 2px lightgrey',
          borderRadius: '8px',
        }}
      />
      {locList && (
        <select onSelect={handleOnSelect}>
          {locList.map((locData, index) => (
            <option key={index} value={[locData.latitude, locData.longitude]}>
              {`${locData.name}, ${locData.country}`}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default LocationInput;
