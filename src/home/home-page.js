import React from 'react';
import logo from './logo.svg';
import './home.css';
import ProjectListContainer from './project-list-container';

const HomePage = () => {
  return (
    <div className='home'>
      <header className='home-header'>
        <h1>Welcome to React Playground</h1>
        <img src={logo} className='home-logo' alt='react-logo' />
      </header>
      <div className='home-description'>
        <p>
          this project created as repository to store all my mini project while
          I learn
        </p>
        <span className='react-link'>
          <a href='https://reactjs.org/'>
            <code>React Js</code>
          </a>
        </span>
      </div>
      <ProjectListContainer></ProjectListContainer>
    </div>
  );
};

export default HomePage;
