import React, { useRef } from 'react';
import logo from './logo.svg';
import './home.css';
import ProjectListContainer from './project-list-container';
import ProjectContainer from './project-container';

const HomePage = () => {
  const targetRef = useRef();

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
      <ProjectListContainer ref={targetRef}>
        <ProjectContainer title='testing' />
        <ProjectContainer title='testing2' />
        <ProjectContainer title='testing3' />
        <ProjectContainer title='testing4' />
        <ProjectContainer title='testing5' />
      </ProjectListContainer>
    </div>
  );
};

export default HomePage;
