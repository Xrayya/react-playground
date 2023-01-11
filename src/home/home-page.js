import React from 'react';
import logo from './logo.svg';
import './home.css';
import ProjectListContainer from './project-list-container';

const HomePage = () => {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <h1>Welcome to React Playground</h1>
        <img src={logo} className='Home-logo' alt='react-logo' />
      </header>
      <div className='description'>
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
