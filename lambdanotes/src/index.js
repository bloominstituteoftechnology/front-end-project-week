import React from 'react';
import ReactDOM from 'react-dom';

// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { notesReducer } from './store/reducers';
import './index.css';
import App from './App';

const store = createStore(notesReducer, applyMiddleware(thunk));

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
