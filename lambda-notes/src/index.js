import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import App from './Containers/App/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {notesReducer} from './Reducers/NotesReducer';

export const store = createStore(notesReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
