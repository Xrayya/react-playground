import React from 'react';

const WeatherCodeTranslator = ({ weatherCode }) => {
  let weather;
  switch (weatherCode) {
    case 0:
      weather = 'Clear Sky';
      break;
    case 1:
      weather = 'Mainly Clear';
      break;
    case 2:
      weather = 'Parly Coludy';
      break;
    case 3:
      weather = 'Overcast';
      break;
    case 45:
      weather = 'Fog';
      break;
    case 48:
      weather = 'Depositing Rime Fog';
      break;
    case 51:
      weather = 'Light Drizzle';
      break;
    case 53:
      weather = 'Moderate Drizzle';
      break;
    case 55:
      weather = 'Dense Drizzle';
      break;
    case 56:
      weather = 'Light Freezing Drizzle';
      break;
    case 57:
      weather = 'Dense Freezing Drizzle';
      break;
    case 61:
      weather = 'Slight Rain';
      break;
    case 63:
      weather = 'Moderate Rain';
      break;
    case 65:
      weather = 'Heavy Rain';
      break;
    case 66:
      weather = 'Light Freezing Rain';
      break;
    case 67:
      weather = 'Heavy Freezing Rain';
      break;
    case 71:
      weather = 'Slight Snow Fall';
      break;
    case 72:
      weather = 'Moderate Snow Fall';
      break;
    case 75:
      weather = 'Heavy Snow Fall';
      break;
    case 77:
      weather = 'Snow Grains';
      break;
    case 80:
      weather = 'Slight Rain Showers';
      break;
    case 81:
      weather = 'Moderate Rain Showers';
      break;
    case 82:
      weather = 'Violent Rain Showers';
      break;
    case 85:
      weather = 'Slight Snow Showers';
      break;
    case 86:
      weather = 'Haavy Snow Showers';
      break;
    case 95:
      weather = 'Thunderstorm';
      break;
    case 96:
      weather = 'Thunderstorm with Slight Hail';
      break;
    case 97:
      weather = 'Thunderstorm with Heavy Hail';
      break;
    default:
      weather = 'Unidentified Weather';
  }
  return <span>{weather}</span>;
};

export default WeatherCodeTranslator;
