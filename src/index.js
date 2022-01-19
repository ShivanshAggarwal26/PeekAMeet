import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MainState from './context/MainState';

ReactDOM.render(
  <BrowserRouter>
    <MainState>
      <App />
    </MainState>
  </BrowserRouter>,
  document.getElementById('root')
)