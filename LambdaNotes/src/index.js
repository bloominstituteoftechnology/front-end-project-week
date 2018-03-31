import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger);
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


//finish setting up a static version of yourNotes view then work on otherviews
//TODO:
  //styling for: SideBar, ContentContainer, Your Notes, NoteCard

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
//content contains router with different paths for the views

