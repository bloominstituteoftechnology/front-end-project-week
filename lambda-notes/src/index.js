import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './reducers/reducers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleWare = applyMiddleware(thunk, logger)
const DevTools = composeWithDevTools(middleWare)
const store = createStore(reducer, DevTools)
const theme = createMuiTheme({
 typography: {
  useNextVariants: true
 },
 palette: {
  primary: {
    light:'#fafafa',
    main: '#f5f5f5',
    dark: '#e0e0e0',
    contrastText: '#fff',
  },
  secondary: {
    // light: '#2196F3',
    main: '#000000',
    dark: '#000000',
    contrastText: '#000',
  },
},
})

ReactDOM.render(
 <Provider store={store}>
  <Router>
   <MuiThemeProvider theme={theme}>
    <App />
   </MuiThemeProvider>
  </Router>
</Provider>
, document.getElementById('root'));
 
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
