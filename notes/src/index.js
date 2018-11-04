import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { rootReducer } from './Reducers';
import './index.css';
import App from './App';


const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, 
document.getElementById('root'));


