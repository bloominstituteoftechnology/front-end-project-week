import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getNotes } from './actions';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      reduxDevTools
    )
);

store.dispatch(getNotes());

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')  
);

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>, 
//   document.getElementById('root')
// );
// registerServiceWorker();

