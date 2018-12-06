// importing libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// importing components
import App from './App';

// use local storage for data persistance
const persistedData = JSON.parse(window.localStorage.getItem('redux-notes')) || [];

// Redux Store
// TODO: change first input to reducers
const store = createStore(()=>{}, persistedData);

// subscribe local storage to get updated data
store.subscribe(() => {
  localStorage.setItem('redux-notes', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);