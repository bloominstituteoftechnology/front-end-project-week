import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {notesReducer} from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    notesReducer, // this is the most basic reducer. A function that returns and object. Replace it.
    applyMiddleware(thunk)
  );

ReactDOM.render(
    <Provider store={store}>
<Router>
    <App />
  </Router>
  </Provider>, document.getElementById('root'));

