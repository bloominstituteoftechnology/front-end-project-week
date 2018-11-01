import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { notesReducer } from './reducers';
import thunk from 'redux-thunk';

const devtools = process.env.NODE_ENV === 'test'
  ? x => x /* eslint-disable no-underscore-dangle */
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

const store = createStore(
  notesReducer,
  compose(applyMiddleware(thunk),devtools,),
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));


