import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'emotion-theming'
import theme from './styles/theme'

ReactDOM.render(<ThemeProvider theme={theme}><Router><App /></Router></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
