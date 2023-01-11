import React from 'react';
import logo from './logo.svg';
import './home.css';

const HomePage = () => {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <h1>Welcome to React Playground</h1>
        <img src={logo} className='Home-logo' alt='react-logo' />
      </header>
    </div>
  );
};

export default HomePage;
