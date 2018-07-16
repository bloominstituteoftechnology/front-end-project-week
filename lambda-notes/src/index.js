import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import appTheme from './appTheme';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </Router>, document.getElementById('root'));