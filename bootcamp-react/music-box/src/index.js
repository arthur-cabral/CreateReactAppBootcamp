import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import './assets/css/reset.css'
import './assets/css/style.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar> </NavBar>
    <HomePage> </HomePage>
  </React.StrictMode>,
  document.getElementById('root')
);

