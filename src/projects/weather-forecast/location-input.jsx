import React, { useState } from 'react';
import OptionsMenu from './options-menu';

const LocationInput = ({ onSelect }) => {
  const [locList, setLocLists] = useState(null);

  async function getLocatation(cityName) {
    const api = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    const result = await fetch(api);
    const locData = await result.json();
    // console.log(locData.results);
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
    const loc = e.target.value.split(' ');
    const weatherData = await getWeatherData(loc[0], loc[1]);
    onSelect(weatherData);
  };

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <input
        type='text'
        onChange={handleOnChange}
        onFocus={(e) => {
          if (e.target.value === e.target.defaultValue) {
            e.target.value = '';
          }
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
          width: '100%',
          boxSizing: 'border-box',
          padding: '8px',
          fontSize: '16px',
          textAlign: 'center',
          color: 'grey',
          border: 'solid 2px lightgrey',
          borderRadius: '8px',
        }}
      />
      {locList && (
        <OptionsMenu
          data={locList}
          onSelect={handleOnSelect}
          style={{
            border: 'solid 2px black',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
        />
      )}
    </div>
  );
};

export default LocationInput;
