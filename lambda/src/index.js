import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers'
import registerServiceWorker from './registerServiceWorker';

const defaultNotes = {

};
export const store = createStore(rootReducer, defaultNotes);
ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
