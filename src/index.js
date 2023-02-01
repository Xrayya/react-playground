import React from 'react';
import ReactDOM from 'react-dom/client';
import Playground from './flexbox-playground/playground';
// import HomePage from './home/home-page';
import './global.css'
// import StyleChanger from './tester/styleChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <Playground />
    {/* <StyleChanger /> */}
  </React.StrictMode>
);
