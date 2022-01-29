import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import MainState from './context/MainState';
import store from "./store/index";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainState>
        <App />
      </MainState>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)