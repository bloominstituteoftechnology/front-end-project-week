import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import appTheme from './appTheme';
import configureStore from './configureStore';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>, document.getElementById('root'));