import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));


//component structure
  //Index
    //Login Eventually
    //SideBar
    //App
      //ViewNote
      //NewNote
      //EditNote
      //YourNotes
        //subCompnent for noteCard?

//index contains sidebar and app
//app contains router with different paths for the views

