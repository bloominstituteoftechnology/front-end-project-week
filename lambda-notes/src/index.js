import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { notesReducer } from './reducers';

const store = createStore(
    notesReducer, 
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>    
</Provider>,
document.getElementById('root'));

