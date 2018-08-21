import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './styles/index.css';
import App from './components/App';

const store = createStore();


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
   document.getElementById('root'));

